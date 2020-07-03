import React  from 'react';
import Post from "./Post/Post";
import classes from "./MyPost.module.css";


   const Mypost = () => {
       return (
       <div>
           Myposts
           <div>
               <textarea></textarea>
               <button>Add Post</button>
           </div>
           <div className={classes.post}>
             <Post />
             <Post />
             <Post />
           </div>
       </div>);
   }
   export default Mypost;