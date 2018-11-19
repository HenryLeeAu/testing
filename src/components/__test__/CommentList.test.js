import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from "Root";

let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ['Comment1','Comment2']
  }
  wrapped=mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});
it('create one Li per comment', ()=>{
  //console.log(wrapped.find('li').length)
  expect(wrapped.find('li').length).toEqual(2)
});

it('show the text ', ()=>{
  //console.log(typeof wrapped.render().text())
  expect(wrapped.render().text()).toContain('Comment1');
  expect(wrapped.render().text()).toContain('Comment2');
  
})
