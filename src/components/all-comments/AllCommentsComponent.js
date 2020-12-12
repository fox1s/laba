import React, {Component} from 'react';
import './AllComments.css'
import CommentsService from "../services/CommentsService";
import CommentComponent from "../comment/CommentComponent";

class AllCommentsComponent extends Component {
    CommentsService= new CommentsService()
    state = {comments:[]}

    componentDidMount() {
        this.CommentsService.getAllCommentsFromAPI().then(comments => this.setState({comments}))
    }

    render() {
        let {comments} = this.state;
        return (
            <div>
                <div className={'title-comments-div'}>
                    <span className={'title-text-comments'}>Comments</span>
                </div>
                <div className={'body-comments-div'}>
                    <div className={'body-div-title-comments'}>
                        <div className={'body-title-comments'}>Name</div>
                        <div className={'body-title-comments'}>Body</div>
                    </div>

                    {comments.map(value => <CommentComponent item = {value} key = {value.id}/>)}
                </div>
            </div>

        );
    }
}

export default AllCommentsComponent;