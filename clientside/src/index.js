import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Mymainpage from "./modules/dashboard/Mymainpage";
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Myloginpage from './modules/auth/Myloginpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import 'react-toastify/dist/ReactToastify.css';
import "./css/Myheaderpage.css"
import "./css/Myloginpage.css"
import "./css/Myregistorpage.css"
import "./css/Mymainpage.css"
import "./css/Myfooterpage.css"
import "./css/Mycustomtable.css"
import "./css/Myerrorpage.css"
import "./css/Modal.css"
import "./css/Cardcarousel.css"
import "./css/Myplacement.css"
import "./css/Cybersecurity.css"
import "./css/Contactus.css"
import Mycustomtable from './modules/dashboard/Mycustomtable';
import Myerrorpage from './modules/shares/Myerrorpage';
import Userdataview from './modules/dashboard/Userdataview';
import OurStudentdata from './modules/dashboard/OurStudentdata';
import Usereditpage from './modules/dashboard/Usereditpage';
import { Provider } from 'react-redux';
import { store } from './modules/reduxpage/Mystore';
import Myplacement from './modules/shares/Myplacement';
import Cybersecurity from './modules/coursepages/Cybersecurity';
import Sap from './modules/coursepages/Sap';
import Contactpage from './modules/components/Contactpage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Mylandingpage/>} />
    <Route path='/mylandingpage'element={<Mymainpage/>}/>
    <Route path='/myloginpage' element={<Myloginpage/>}/>
    <Route path='/myregistorpage' element={<Myregistorpage/>} >
    </Route>
    <Route path='/myplacement' element={<Myplacement/>}></Route>
    <Route path='/ourstudentdata' element={<OurStudentdata/>}></Route>
    <Route path='/mycustomtable' element={<Mycustomtable/>}></Route>
    <Route path='/ourstudentdata/userview/:id' element={<Userdataview/>}></Route>
    <Route path='/ourstudentdata/edituser/:id' element={<Usereditpage/>}></Route>
    <Route path='/cybersecurity' element={<Cybersecurity/>}></Route>
    <Route path='/sap' element={<Sap/>}></Route>
    <Route path='/contactus' element={<Contactpage/>}></Route>
<Route path='*' element={<Myerrorpage/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);


reportWebVitals();
