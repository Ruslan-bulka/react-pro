

import React  from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App =  () =>{
    return (
        <div className='app-wrap'>
            <Header/>
            <Nav/>
            <div className='app-wrap-content'>
            <Dialogs />
            </div>
            {/*<Profile/>*/}

        </div>);



}



export default App;
