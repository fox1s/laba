import React, {Component} from 'react';
import './UserDetails.css'
import UsersService from "../services/UsersService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';


class UserDetailsComponent extends Component {
    UsersService = new UsersService();
    state = {user: null}

    componentDidMount() {
        let {userId} = this.props;
        this.UsersService.getChosenUserFromAPI(userId).then(user => this.setState({user}))
    }

    render() {
        let {user} = this.state;
        const {match: {url}} = this.props;
        console.log(url)
        console.log(this.props);
        return (
            <div className={'body-details-div'}>
                {user && <span className={'text-title-details'}>Details about <i>{user.name}</i></span>}
                <div className={'chosenUserDiv'}>
                    <div className={'chosenUser'}>
                        {user &&
                        <div className={'user-details'}>
                            <div className={'name'}><b>{user.id}. </b>{user.name}</div>
                            <div className={'email'}>{user.email}</div>
                            <div className={'address'}>{user.address.street}/{user.address.suite}</div>
                        </div>
                        }
                    </div>

                    {user && <div>
                        <div className={'details-info'}><b>username:</b> {user.username}</div>
                        <div className={'details-info'}><b>phone:</b> {user.phone}</div>
                        <div className={'details-info'}><b>website:</b> {user.website}</div>
                        <div className={'details-info'}>
                            <b>company:</b> {user.company.name} ({user.company.catchPhrase} )
                        </div>
                        <Link to={url + '/users_posts'} className={'users_posts-link'}>Posts of {user.name}</Link>
                    </div>
                    }


                </div>
            </div>
        );
    }
}

export default UserDetailsComponent;