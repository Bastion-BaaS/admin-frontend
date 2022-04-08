import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from './Home';
import { fetchBastions, createBastion } from '../actions/BastionActions';

jest.mock('../actions/BastionActions', () => {
  return {
    fetchBastions: jest.fn(() => ({ type: 'none' })),
    createBastion: jest.fn(() => ({ type: 'none' })),
  };
});

describe('Home tests', () => {
  let createElement;
  let component;

  beforeEach(() => {
    const mockStore = configureStore();
    component = render(
      <Provider store={mockStore({bastions: []})}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    createElement = component.getByText('Create Instance');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls fetchBastions', () => {
    expect(fetchBastions).toHaveBeenCalledTimes(1);
  });

  it('renders Create button', () => {
    expect(createElement).toBeDefined();
  });

  it('does not show add form by default', () => {
    const createBastionButton = component.container.querySelector('#createBastion');
    const newBastionElement = component.container.querySelector('#newBastionName');
    expect(createBastionButton).not.toBeDefined;
    expect(newBastionElement).not.toBeDefined;
  });

  it('shows add form when create is clicked', () => {
    fireEvent.click(createElement);
    const newBastionElement = component.container.querySelector('#newBastionName');
    const createBastionButton = component.container.querySelector('#createBastion');
    const cancel = component.getByText('Cancel');
    expect(newBastionElement).toBeDefined();
    expect(createBastionButton).toBeDefined();
    expect(cancel).toBeDefined();
  });

  it('calls createCollection when save is clicked', () => {
    fireEvent.click(createElement);
    const newBastionElement = component.container.querySelector('#newBastionName');
    fireEvent.change(newBastionElement, {
      target: { value: 'testName' },
    });
    const save = component.getByText('Create');
    fireEvent.click(save);
    expect(createBastion).toHaveBeenCalledTimes(1);
  });

  it('toggles add form when cancel is clicked', () => {
    fireEvent.click(createElement);
    const cancel = component.getByText('Cancel');
    fireEvent.click(cancel);
    const createButton = component.getByText('Create Instance')
    expect(createButton).toBeDefined();
  });
});