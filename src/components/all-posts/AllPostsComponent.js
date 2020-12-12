import React, {Component} from 'react';
import './AllPosts.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import PostsService from "../services/PostsService";
import PostComponent from "../post/PostComponent";
import UserComponent from "../user/UserComponent";
import UserDetailsComponent from "../user-details/UserDetailsComponent";

class AllPostsComponent extends Component {
    PostService = new PostsService()

    state = {posts: []}

    componentDidMount() {
        this.PostService.getAllPostsFromApi().then(posts => this.setState({posts}))
    }

    render() {
        let {posts} = this.state;
        return (
        //     <div>
        //         {
        //             posts.map((value, index) => {
        //                 if (index < 10) {
        //                     return <PostComponent item={value} key={value.id}/>
        //                 }
        //             })
        //         }
        //     </div>

             <div>

                <div className={'title-div-posts'}>
                    <span className={'title-text-posts'}>Posts</span>
                </div>
                <div className={'body-div-posts'}>
                    <div className={'body-title-posts'}>
                        <div className={'body-title-title'}>Title</div>
                        <div className={'body-title-body'}>Body</div>
                    </div>
                    {
                        posts.map((value, index) => {
                            if (index < 10) {
                                return <PostComponent item={value} key={value.id}/>
                            }
                        })
                    }
                    {/*<div className={'chosenUserDiv'}>*/}
                    {/*    <Switch>*/}
                    {/*        <Route path={url + '/:id'} render={(props) => {*/}
                    {/*            const {match:{params:{id}}} = props*/}
                    {/*           return <UserDetailsComponent userId = {id} key={id}/>*/}
                    {/*        }}/>*/}
                    {/*    </Switch>*/}
                    {/*</div>*/}

                </div>
            </div>

        );
    }
}

export default AllPostsComponent;