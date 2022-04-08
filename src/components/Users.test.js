import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Users from './Users';
import { fetchUsers } from '../actions/UserActions';

jest.mock('react-router-dom', () => {
  const ActualReactRouter = jest.requireActual('react-router-dom')
  return {
    ...ActualReactRouter,
    useOutletContext: () => ({StackName: 'testname' }),
  }
})
jest.mock('../actions/UserActions', () => {
  return {
    fetchUsers: jest.fn(() => ({ type: 'none' })),
  };
});

describe('Users tests', () => {
  let createElement;
  let component;

  beforeEach(() => {
    const mockStore = configureStore();
    component = render(
      <Provider store={mockStore({users: []})}>
        <Users />
      </Provider>
    );
    createElement = component.getByText('Create');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls fetchUsers', () => {
    expect(fetchUsers).toHaveBeenCalledTimes(1);
  });

  it('renders Create button', () => {
    expect(createElement).toBeDefined();
  });
});