import React  from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <div>
            <img src='https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
            </div>
            <div>
                ava+ описание
            </div>
            <div>
                posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        1 post
                    </div>
                    <div className={classes.item}>
                        2 post
                    </div>
                </div>
            </div>
        </div>);

        }
        export default Profile;





