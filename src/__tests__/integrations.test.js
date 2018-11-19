import React from 'react';
import { mount, unmount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App'

beforeEach(()=>{
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status:200,
    response:[{name:'Fetched #1'}, {name:'Fetched #2'}]
  })
})
afterEach(()=>{
  moxios.uninstall();
})
it('can fetch a list of comment and display them', (done) =>{
    // attemp to render the entire app
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    )

    //find the 'fetchComments button and click it
    wrapped.find('.fetch-comments').simulate('click');
    //Expect to find a list of comments!
      //after click it will check the li straight away and no time to wait for moxios t omockup the request
      //introduce a tiny pause
    moxios.wait(() =>{
      wrapped.update();

      expect(wrapped.find('li').length).toEqual(2);

      done();
      wrapped.unmount();
    })
   
})