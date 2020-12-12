import React, {Component} from 'react';
import './AllUsers.css'
import UsersService from "../services/UsersService";
import UserComponent from "../user/UserComponent";

import {Route, Switch, withRouter} from 'react-router-dom';
import UserDetailsComponent from "../user-details/UserDetailsComponent";
import UsersPostsComponent from "../users-posts/UsersPostsComponent";

class AllUsersComponent extends Component {
    UsersService = new UsersService();
    state = {users: []}

    componentDidMount() {
        this.UsersService.getAllUsersFromAPI().then(users => this.setState({users}))
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        console.log(url, '++++++++++')
        return (
            <div>

                <div className={'title-div'}>
                    <span className={'title-text'}>Users</span>
                </div>
                <div className={'body-div'}>
                    <div className={'body-title'}>
                        <div className={'body-title-name'}>Name</div>
                        <div className={'body-title-email'}>Email</div>
                        <div className={'body-title-address'}>Address</div>
                    </div>
                    {
                        users.map(value => <UserComponent item={value} key={value.id}/>)
                    }
                </div>


                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        const {match: {params: {id}}} = props
                        return <UserDetailsComponent userId={id} key={id} {...props}/>
                    }}/>
                </Switch>
                {/*<div className={'body-details-div'}>*/}
                {/*    <div className={'chosenUserDiv'}>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <Switch>
                    <Route path={url + '/:id/users_posts'} render={(props) => {
                        console.log(props, 'dddd')
                        const {match: {params: {id}}} = props
                        return <UsersPostsComponent userId={id} key={id}/>
                    }}/>
                </Switch>


            </div>
        );
    }
}

export default withRouter(AllUsersComponent);