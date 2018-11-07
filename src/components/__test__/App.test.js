import React from 'react';
import { shallow } from 'enzyme'
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let  wrappered;
beforeEach(()=>{
    wrappered = shallow(<App />);
});

it('App component - Shows a comment box', () => {
    expect(wrappered.find(CommentBox).length).toEqual(1);
});

it('App - show comment list', () => {
    
    expect(wrappered.find(CommentList).length).toEqual(1) 

});
