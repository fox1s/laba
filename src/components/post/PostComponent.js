import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Post.css'

class PostComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                <div className={'post'}>
                    <div className={'post-title'}>
                        <b>{item.id}. </b>{item.title}
                    </div>
                    <div className={'post-body'}>
                        {item.body}
                    </div>




                    {/*<div className={'address'}>*/}
                    {/*    {item.address.street}/{item.address.suite}*/}
                    {/*</div>*/}
                    {/*<div className={'user-div-link'}>*/}
                    {/*    <Link to={url + '/' + item.id} className={'user-link'}>Details</Link>*/}
                    {/*</div>*/}

                </div>
                <hr className={'post-hr'}/>
            </div>
        );
    }
}

export default PostComponent;