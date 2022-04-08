import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Files from './Files';
import { fetchFiles } from '../actions/FileActions';

jest.mock('react-router-dom', () => {
  const ActualReactRouter = jest.requireActual('react-router-dom')
  return {
    ...ActualReactRouter,
    useOutletContext: () => ({StackName: 'testname' }),
  }
})
jest.mock('../actions/FileActions', () => {
  return {
    fetchFiles: jest.fn(() => ({ type: 'none' })),
  };
});

describe('Files tests', () => {
  let createElement;
  let component;

  beforeEach(() => {
    const mockStore = configureStore();
    component = render(
      <Provider store={mockStore({files: []})}>
        <Files />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls fetchFiles', () => {
    expect(fetchFiles).toHaveBeenCalledTimes(1);
  });

  it('renders when there are no Files', () => {
    const noFilesElement = component.getByText('You have no files');
    expect(noFilesElement).toBeDefined();
  });
});