import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletepost} from '../actions/postActions';

class Post extends Component{
    handleClick = () => {
        this.props.deletepost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
        const post = this.props.post ? (
            <div>
                <h4>{this.props.post.id}</h4>
                <span>{this.props.post.title}</span>
                <p>{this.props.post.body}</p>
                <button onClick={this.handleClick}>delete</button>
            </div>
        ) : (
            <div>loading post......</div>
        )
        return(
            <div>
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.post_id;
    return{
        post: state.posts.find(post => post.id === id)
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        deletepost: (id) => {dispatch(deletepost(id))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);