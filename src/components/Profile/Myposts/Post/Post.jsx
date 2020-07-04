import React  from 'react';
import classes from './Post.module.css';

   const Post = (props) => {

       return (
               <div className={classes.item}>
                   <img src='https://avatars.mds.yandex.net/get-pdb/49816/76984ce4-b405-44f8-ae4e-c77de11ae1d6/s600?webp=false'/>
                   <span>{props.message}</span>

                   <div className={classes.button}>
                     <button> like {props.number_like} </button>
                   </div>

               </div>

       );
   }
   export default Post;