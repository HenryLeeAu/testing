import React from 'react';
import { mount, unmount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrappered;
beforeEach(() => {
   wrappered = mount(<CommentBox />);
})

//mount need to be unmounted
afterEach(() => {
  wrappered.unmount();
})

it('has a test area and a button', () => {
  expect(wrappered.find('textarea').length).toEqual(1);
  expect(wrappered.find('button').length).toEqual(1);
})


it('has a text area', ()=>{
  wrappered.find('textarea').simulate('change',{
    target: {value:'new comment'}
  });
  wrappered.update();

  expect(wrappered.find('textarea').prop('value')).toEqual('new comment')
})