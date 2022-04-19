import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CloudCode from './CloudCode';
import { fetchFunctions } from '../../actions/CloudCodeActions';

window.alert = jest.fn();

jest.mock('react-router-dom', () => {
  const ActualReactRouter = jest.requireActual('react-router-dom')
  return {
    ...ActualReactRouter,
    useOutletContext: () => ({StackName: 'testname' }),
  }
})
jest.mock('../../actions/CloudCodeActions', () => {
  return {
    fetchFunctions: jest.fn(() => ({ type: 'none' })),
    deleteFunction: jest.fn(() => ({ type: 'none' })),
    createFunction: jest.fn(() => ({ type: 'none' })),
  };
});

describe('CloudCode tests', () => {
  let component;
  let funcTitle;
  let submit;
  let create;
  let cancel;

  beforeEach(() => {
    const mockStore = configureStore();
    component = render(
      <Provider store={mockStore({cloudCode: []})}>
        <CloudCode />
      </Provider>
    );
    create = component.getByText('Create');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls fetchFunctions with correct parameter', () => {
    expect(fetchFunctions).toHaveBeenCalledTimes(1);
    expect(fetchFunctions.mock.calls[0][0]).toBe('testname');
  });

  it('does not show add form by default', () => {
    funcTitle = component.container.querySelector('#newFunctionName');
    expect(funcTitle).not.toBeDefined;
    expect(create).toBeDefined;
  });

  it('shows add form when create is clicked', () => {
    fireEvent.click(create);
    submit = component.getByText('Submit');
    cancel = component.getByText('Cancel');
    expect(submit).toBeDefined();
    expect(cancel).toBeDefined();
  });

  it('toggles add form when cancel is clicked', () => {
    fireEvent.click(create);
    cancel = component.getByText('Cancel');
    fireEvent.click(cancel);
    const createButton = component.getByText('Create')
    expect(createButton).toBeDefined();
  });
});