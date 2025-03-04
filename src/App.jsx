
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Content from './Components/Contents/Content';
import styles from "./App.module.scss";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Insc from './Components/Register/Insc';
import Register_medecin from './Components/Register/Register_medecin';
import Register_patient from './Components/Register/Register_patient';
import Login from './Components/Auth/Login';
import Login_medecin from './Components/Auth/Login_medecin';
import Login_patient from './Components/Auth/Login_patient';

const App =()=> {


  return  (
  <div className={`${styles.app_container}`}>
    <Router>
    <Header/>
    <Routes>
    <Route path='/' element={<Content/>}/>
    <Route path='/Insc' element={<Insc/>} />
    <Route path='/Auth' element={<Login/>} />

    <Route path='/Insc/medecin' element={<Register_medecin/>} />
    <Route path='/AUth/medecin' element={<Login_medecin/>} />


    <Route path='/Insc/patient' element={<Register_patient/>} />
    <Route path='/Auth/patient' element={<Login_patient/>} />

    



    
    </Routes>
    <Footer/>
    </Router>
    </div>
    );
}

export default App;
