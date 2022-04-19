import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Login from './Login';
import { loginAdmin } from '../../actions/AdminActions';

jest.mock('../../actions/AdminActions', () => {
  return {
    loginAdmin: jest.fn(() => ({ type: 'none' })),
  };
});

describe('Login tests', () => {
  let component;
  let username;
  let password;
  let login;

  beforeEach(() => {
    const mockStore = configureStore();
    component = render(
      <Router>
        <Provider store={mockStore()}>
          <Login />
        </Provider>
      </Router>
    );
    username = component.container.querySelector('#username');
    password = component.container.querySelector('#password');
    login = component.getByText('Login');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the username and password inputs', () => {
    expect(username).toBeDefined;
    expect(password).toBeDefined;
  });

  it('calls loginAdmin with correct params', () => {
    fireEvent.change(username, {
      target: { value: 'testUser' },
    });

    fireEvent.change(password, {
      target: { value: 'password' },
    });

    fireEvent.click(login);
    const loginObj = {password: 'password', username: 'testUser'};

    expect(loginAdmin).toHaveBeenCalledTimes(1);
    expect(loginAdmin.mock.calls[0][0]).toEqual(loginObj);
  });
});