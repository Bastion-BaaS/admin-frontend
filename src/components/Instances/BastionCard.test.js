import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BastionCard from './BastionCard';

describe('Bastion Card tests', () => {
  let mockDelete = jest.fn();
  let maskedAPIKey = '******iKey';
  let component;
  let showApiButton;
  let deleteElement;
  const bastion = {
    ApiKey: 'TestApiKey',
    createdAt: 'testDate',
    StackName: 'bastionName',
  };

  beforeEach(() => {
    const mockStore = configureStore();
    component = render(
      <Provider store={mockStore()}>
        <BastionCard handleDelete={mockDelete}
          bastion={bastion} />
      </Provider>
    );
    showApiButton = component.getByText('show');
    deleteElement = component.container.querySelector('#deleteInstance');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the masked ApiKey and bastion name', () => {
    const bastionNameElement = component.getByText(`${bastion.StackName}`);
    const maskedAPIKeyElement = component.getByText(`${maskedAPIKey}`);
    expect(bastionNameElement).toBeDefined();
    expect(maskedAPIKeyElement).toBeDefined();
  });

  it('shows full ApiKey when show is clicked', () => {
    fireEvent.click(showApiButton);
    const fullAPIKeyElement = component.getByText(`${bastion.ApiKey}`);
    expect(fullAPIKeyElement).toBeDefined();
  });

  it('calls delete handler with the correct argument', () => {
    fireEvent.click(deleteElement);
    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockDelete.mock.calls[0][0]).toBe('bastionName')
  });
});