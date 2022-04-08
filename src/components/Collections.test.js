import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Collections from './Collections';
import { fetchCollections, createCollection } from '../actions/CollectionActions';

jest.mock('react-router-dom', () => {
  const ActualReactRouter = jest.requireActual('react-router-dom')
  return {
    ...ActualReactRouter,
    useOutletContext: () => ({StackName: 'testname' }),
  }
})
jest.mock('../actions/CollectionActions', () => {
  return {
    fetchCollections: jest.fn(() => ({ type: 'none' })),
    createCollection: jest.fn(() => ({ type: 'none' })),
  };
});

describe('Collections tests', () => {
  let createElement;
  let component;

  beforeEach(() => {
    const mockStore = configureStore();
    component = render(
      <Provider store={mockStore({collections: []})}>
        <Collections />
      </Provider>
    );
    createElement = component.getByText('Create');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls fetchCollections', () => {
    expect(fetchCollections).toHaveBeenCalledTimes(1);
  });

  it('renders when there are no collections', () => {
    const noCollectionsElement = component.getByText('You have no collections');
    expect(createElement).toBeDefined();
    expect(noCollectionsElement).toBeDefined();
  });

  it('does not show add form by default', () => {
    const newCollectionElement = component.container.querySelector('#newCollectionName');
    const saveElement = component.container.querySelector('#saveCollection');
    expect(newCollectionElement).not.toBeDefined;
    expect(saveElement).not.toBeDefined;
  });

  it('shows add form when create is clicked', () => {
    fireEvent.click(createElement);
    const save = component.getByText('Save');
    const cancel = component.getByText('Cancel');
    expect(save).toBeDefined();
    expect(cancel).toBeDefined();
  });

  it('calls createCollection when save is clicked', () => {
    fireEvent.click(createElement);
    const newCollectionElement = component.container.querySelector('#newCollectionName');
    fireEvent.change(newCollectionElement, {
      target: { value: 'testName' },
    });
    const save = component.getByText('Save');
    fireEvent.click(save);
    expect(createCollection).toHaveBeenCalledTimes(1);
  });

  it('toggles add form when cancel is clicked', () => {
    fireEvent.click(createElement);
    const cancel = component.getByText('Cancel');
    fireEvent.click(cancel);
    const createButton = component.getByText('Create')
    expect(createButton).toBeDefined();
  });
});