import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('App component - Shows a comment box', () => {
    //JSDOM simulate the browser
    const div = document.createElement('div');
    
    ReactDOM.render(<App />, div);

    //see if the commentbox is in there
    expect(div.innerHTML).toContain('comment box')

    //clear memory
    ReactDOM.unmountComponentAtNode(div);
})
