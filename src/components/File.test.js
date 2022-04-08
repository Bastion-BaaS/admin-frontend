import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import File from './File';

describe('File tests', () => {
  let component;
  const mockDelete = jest.fn();
  const file = {
    createdAt: 'testDate',
    id: 123,
    fileName: 'testFile',
  };

  beforeEach(() => {
    component = render(
      <File file={file} index={0} handleDelete={mockDelete} />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays File name', () => {
    const FileNameElement = component.getByText(`${file.fileName}`);
    expect(FileNameElement).toBeDefined();
  });

  it('calls handleDelete when clicked', () => {
    const deleteFileElement = component.container.querySelector('#deleteFile');
    fireEvent.click(deleteFileElement);
    expect(deleteFileElement).toBeDefined();
    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});