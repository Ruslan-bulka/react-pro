import React  from 'react';
import classes from './Profile.module.css';
import Mypost from "./Myposts/MyPost";


const Profile = () => {
    return (
        <div>
            <div>
            <img src='https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </div>
            <div>
                ava + описание
            </div>
             <Mypost Name='Ruslan' Age='15'/>
        </div>);

        }
        export default Profile;





