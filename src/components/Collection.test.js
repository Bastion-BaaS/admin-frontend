import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Collection from './Collection';

describe('Collection tests', () => {
  let component;
  const mockDelete = jest.fn();
  const mockActive = jest.fn();

  beforeEach(() => {
    component = render(
      <Collection active={false} name={'testCollection'} index={0} handleDelete={mockDelete}
        handleActive={mockActive} />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls handleActive when tab is clicked', () => {
    const collectionDivElement = component.container.querySelector('#collectionTab');
    fireEvent.click(collectionDivElement);
    expect(collectionDivElement).toBeDefined();
    expect(mockActive).toHaveBeenCalledTimes(1);
  });

  it('displays collection name', () => {
    const nameElement = component.getByText('testCollection');
    expect(nameElement).toBeDefined();
  });

  it('calls handleDelete when svg is clicked', () => {
    const svg = component.container.querySelector('svg');
    fireEvent.click(svg);
    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});