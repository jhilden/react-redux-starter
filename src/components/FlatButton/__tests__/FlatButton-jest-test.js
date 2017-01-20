import React from 'react';
import FlatButton from '../FlatButton';
import renderer from 'react-test-renderer';

test('FlatButton changes the class when clicked', () => {
  const component = renderer.create(
    <FlatButton onClick={function(event) { return; }}>Click</FlatButton>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});