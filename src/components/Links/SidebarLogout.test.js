import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import SidebarLogout from './SidebarLogout';
import { logoutAdmin } from '../../actions/AdminActions';

jest.mock('../../actions/AdminActions', () => {
  return {
    logoutAdmin: jest.fn(() => ({ type: 'none' })),
  };
});

describe('SidebarLogout tests', () => {
  let component;
  let logout;

  beforeEach(() => {
    const mockStore = configureStore();
    component = render(
      <Router>
        <Provider store={mockStore()}>
          <SidebarLogout />
        </Provider>
      </Router>
    );
    logout = component.container.querySelector('#logoutDiv');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the logout element', () => {
    const logoutElement = component.getByText('Logout');
    expect(logoutElement).toBeDefined;
  });

  it('calls logoutAdmin on click', () => {
    fireEvent.click(logout);
    expect(logoutAdmin).toHaveBeenCalledTimes(1);
  });
});