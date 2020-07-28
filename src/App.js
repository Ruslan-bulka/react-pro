

import React  from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/setting/Setting";
import {BrowserRouter, Route} from "react-router-dom";

const App =  () =>{
    return (
        <BrowserRouter>
        <div className='app-wrap'>
            <Header/>
            <Nav/>
             <div className='app-wrap-content'>
                 <Route path='/Setting' component={Setting}/>
                 <Route path= '/Music' component={Music} />
                 <Route path= '/Dialogs' component={Dialogs}/>
                 <Route path= '/Profile' component={Profile}/>
                 <Route path= '/News' component={News}/>
             </div>
        </div>
        </BrowserRouter>);



}



export default App;
