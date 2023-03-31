import React from 'react';
import renderer from 'react-test-renderer';
import GitHubCard from './GitHubCard';

describe('GitHubCard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GitHubCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
