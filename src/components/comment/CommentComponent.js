import React, {Component} from 'react';
import './Comment.css'

class CommentComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                <div className={'comment'}>
                    <div className={'comment-name'}><b>{item.id}. </b>{item.name}</div>
                    <div className={'comment-body'}>{item.body}</div>
                </div>
                <hr/>
            </div>


        );
    }
}

export default CommentComponent;