import React, { Component } from "react";
import { connect } from 'react-redux';


class CommentList extends Component {
  renderComments(){
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    })
 
  }
  componentDidUpdate(){
   
  }
  componentDidMount(){
   
  }
  render() {
    return (
      <div>
        <h4>Comment list</h4>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    comments:state.comments
  }
}
export default connect(mapStateToProps)(CommentList)