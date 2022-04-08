import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CloudCodeCard from './CloudCodeCard';

describe('CloudCodeCard tests', () => {
  let component;
  const func = { createdAt: 'date', functionName: 'testFunc' };
  const mockDelete = jest.fn();
  const index = 0;

  beforeEach(() => {
    component = render(
      <CloudCodeCard func={func} index={index} handleDelete={mockDelete} />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders function name', () => {
    const functionNameElement = component.getByText('testFunc');
    expect(functionNameElement).toBeDefined();
  });

  it('calls delete handler', () => {
    const svg = component.container.querySelector('svg');
    fireEvent.click(svg);
    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});