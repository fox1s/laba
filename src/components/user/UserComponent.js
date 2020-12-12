import React, {Component} from 'react';
import './User.css'
import {Link, withRouter} from 'react-router-dom';

class UserComponent extends Component {
    render() {
        let {item, match: {url}} = this.props

        return (
            <div>
                <div className={'user'}>
                    <div className={'name'}>
                        <b>{item.id}. </b>{item.name}
                    </div>
                    <div className={'email'}>
                        {item.email}
                    </div>
                    <div className={'address'}>
                        {item.address.street}/{item.address.suite}
                    </div>
                    <div className={'user-div-link'}>
                        <Link to={url + '/' + item.id} className={'user-link'}>Details</Link>
                    </div>

                </div>
            </div>

        );
    }
}

export default withRouter(UserComponent);