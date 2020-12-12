import React, {Component} from 'react';
import './UsersPosts.css'
import {withRouter} from 'react-router-dom';
import PostsService from "../services/PostsService";
import PostComponent from "../post/PostComponent";

class UsersPostsComponent extends Component {
    PostsService = new PostsService()
    state = {posts:[]}
    async componentDidMount() {
        const {userId} = this.props;
        this.PostsService.getChosenUsersPostFromAPI(userId).then(posts => this.setState({posts}))
}

    render() {
        // let {userId, match: {url}} = this.props;
        const {posts} = this.state;
        return (
            <div className={'body-usersPosts'}>
                <span className={'usersPosts-title'}>Posts</span>
                {
                    posts.map(value => <PostComponent item = {value} key = {value.id}/>)
                }
            </div>
        );
    }
}

export default withRouter(UsersPostsComponent);