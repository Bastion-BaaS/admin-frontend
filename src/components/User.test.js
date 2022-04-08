import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import User from './User';

describe('User tests', () => {
  let component;
  const mockDelete = jest.fn();
  const user = {
    createdAt: 'testdate',
    id: 1234,
    username: 'testUser',
    email: 'testEmail'
  };

  beforeEach(() => {
    component = render(
      <User user={user} index={0} handleDelete={mockDelete} />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays username and email name', () => {
    const usernameElement = component.getByText('testUser');
    const emailElement = component.getByText('testEmail');
    expect(usernameElement).toBeDefined();
    expect(emailElement).toBeDefined();
  });

  it('calls handleDelete when svg is clicked', () => {
    const svg = component.container.querySelector('svg');
    fireEvent.click(svg);
    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});