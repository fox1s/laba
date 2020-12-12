import React, {Component} from 'react';
import './MyContacts.css'

class MyContactsComponent extends Component {
    render() {
        return (
            <div>

                <div className={'main-contacts'}>
                    <div className={'contacts-text'}>My Contacts</div>
                </div>
                <div className={'contacts-icon'}>
                    <a href="https://www.instagram.com/rostik_smikh/?hl=ru" className={'link-of-contacts'}><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/480px-Instagram_icon.png"
                        width="30" alt="instagram"/></a>

                    <a href="https://t.me/foxis_r" className={'link-of-contacts'}><img
                        src="https://i.pinimg.com/originals/99/f0/3f/99f03fdee90d871d3d1e718c82feb8be.png"
                        width="35" alt="telegram"/></a>

                    <a href="https://www.facebook.com/rostiksmikh" className={'link-of-contacts'}><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                        width="30" alt="facebook"/></a>


                </div>
            </div>
        );
    }
}

export default MyContactsComponent;