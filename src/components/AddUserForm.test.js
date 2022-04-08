import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddUserForm from './AddUserForm';
import { createUser } from '../actions/UserActions';

window.alert = jest.fn();
jest.mock('../actions/UserActions', () => {
  return {
    createUser: jest.fn(() => ({ type: 'none' })),
  };
});

describe('add user tests', () => {
  let mockHandler = jest.fn();
  let component;
  let username;
  let email;
  let password;
  let submit;

  beforeEach(() => {
    const mockStore = configureStore();
    component = render(
      <Provider store={mockStore()}>
        <AddUserForm onCancelOrCreate={mockHandler}
          bastionName={'testBastion'} />
      </Provider>
    );
    username = component.container.querySelector('#username');
    email = component.container.querySelector('#newUserEmail');
    password = component.container.querySelector('#newUserPassword');
    submit = component.getByText('Create');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the username, password, and email inputs', () => {
    expect(username).toBeDefined;
    expect(email).toBeDefined;
    expect(password).toBeDefined;
  });

  it('calls onCancelOrCreate and createUser with correct params', () => {
    fireEvent.change(username, {
      target: { value: 'newUser' },
    });

    fireEvent.change(email, {
      target: { value: 'test@test.com' },
    });

    fireEvent.change(password, {
      target: { value: 'password' },
    });

    fireEvent.click(submit);
    fireEvent.click(submit);
    
    const userObj = {
      email: 'test@test.com',
      password: 'password',
      username: 'newUser'
    };

    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(createUser).toHaveBeenCalledTimes(1);
    expect(createUser.mock.calls[0][0]).toBe('testBastion');
    expect(createUser.mock.calls[0][1]).toEqual(userObj);
  });

  it('resets input fields after submit', () => {
    fireEvent.change(username, {
      target: { value: 'newUser' },
    });

    fireEvent.change(email, {
      target: { value: 'test@test.com' },
    });

    fireEvent.change(password, {
      target: { value: 'password' },
    });

    fireEvent.click(submit);
    
    expect(createUser).toHaveBeenCalledTimes(1);
    expect(username.value).toBe('');
    expect(password.value).toBe('');
    expect(email.value).toBe('');
  });

  it('does not call handler and alerts if username is empty', () => {
    fireEvent.change(username, {
      target: { value: '' },
    });

    fireEvent.change(email, {
      target: { value: 'test@test.com' },
    });

    fireEvent.change(password, {
      target: { value: 'password' },
    });

    fireEvent.click(submit);
    expect(mockHandler).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert.mock.calls[0][0]).toBe('All fields required');
  });

  it('does not call handler and alerts if username shorter than 3', () => {
    fireEvent.change(username, {
      target: { value: 'ab' },
    });

    fireEvent.change(email, {
      target: { value: 'test@test.com' },
    });

    fireEvent.change(password, {
      target: { value: 'password' },
    });

    fireEvent.click(submit);
    expect(mockHandler).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert.mock.calls[0][0]).toBe(
      'Username must be at least 2 characters long'
    );
  });

  it('does not call handler and alerts if email is empty', () => {
    fireEvent.change(username, {
      target: { value: 'newUser' },
    });

    fireEvent.change(email, {
      target: { value: '' },
    });

    fireEvent.change(password, {
      target: { value: 'password' },
    });

    fireEvent.click(submit);
    expect(mockHandler).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert.mock.calls[0][0]).toBe('All fields required')
  });

  it('does not call handler and alerts if password is empty', () => {
    fireEvent.change(username, {
      target: { value: 'newUser' },
    });

    fireEvent.change(email, {
      target: { value: 'test@test.com' },
    });

    fireEvent.change(password, {
      target: { value: '' },
    });

    fireEvent.click(submit);
    expect(mockHandler).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert.mock.calls[0][0]).toBe('All fields required')
  });
});