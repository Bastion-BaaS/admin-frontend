import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BastionLayout from './BastionLayout';
import { fetchBastion } from '../../actions/BastionActions';

jest.mock('../../actions/BastionActions', () => {
  return {
    fetchBastion: jest.fn(() => ({ type: 'none' })),
  };
});

describe('BastionLayout tests', () => {
  let component;
  let notFoundElement;

  beforeEach(() => {
    const mockStore = configureStore();
    component = render(
      <Provider store={mockStore({bastions: []})}>
        <BastionLayout />
      </Provider>
      );
    notFoundElement = component.getByText('Bastion not found');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders not found element', () => {
    expect(notFoundElement).toBeDefined();
  });

  it('calls fetchBastion', () => {
    expect(fetchBastion).toHaveBeenCalledTimes(1);
  });

});