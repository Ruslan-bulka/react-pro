import React  from 'react';
import Post from "./Post/Post";
import classes from "./MyPost.module.css";


   const Mypost = (props) => {
       return (
       <div>
           {props.Name}, {props.Age}
           <div>
               <textarea></textarea>
               <button>Add Post</button>
           </div>
           <div className={classes.post}>
             <Post message='How are You?'  number_like='30' />
             <Post message='it s my first post' number_like='20' />


           </div>
       </div>);
   }
   export default Mypost;