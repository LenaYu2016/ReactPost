import React,{Component,PropTypes}from 'react';
import {connect} from 'react-redux';
import {fetchPost,deletePost} from '../actions';
import {Link} from 'react-router';
 class PostsShow extends Component{
     static contextTypes={
         router:PropTypes.object
     };
     componentWillMount(){
         this.props.fetchPost(this.props.params.id);
     }
     onClickDelete(){
         this.props.deletePost(this.props.params.id).then(()=>{
             this.context.router.push('/');
         });
     }
    render(){
        console.log(this.props.post);
        if(!this.props.post){
            return <div>loading...</div>
        }
const {post}=this.props;

        return (
          <div>
              <Link to="/" className="btn btn">Back to index</Link>
              <button className="btn btn-danger pull-xs-right" onClick={this.onClickDelete.bind(this)}>Delete Post</button>
              <h3>{post.title}</h3>
          <h6>Categories:{post.categories}</h6>
              <p>{post.content}</p>
          </div>
        );
    }
}
function mapStateToProps(state){
    console.log(state.posts.post);
    return {post:state.posts.post};
}
export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);