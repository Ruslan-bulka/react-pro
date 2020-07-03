import React  from 'react';
import classes from './Post.module.css';

   const Post = () => {
       return (


               <div className={classes.item}>
                   <img src='https://avatars.mds.yandex.net/get-pdb/49816/76984ce4-b405-44f8-ae4e-c77de11ae1d6/s600?webp=false'/>
                   1 post
                   <div>
                     <button> like </button>
                   </div>
               </div>

       );
   }
   export default Post;