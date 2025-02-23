import Banner from './Components/Banner'
import Header from './Components/Header'
import Footer from './Components/Footer'
import styles from "./assets/styles/App.module.scss"
import Register_medecin from './Components/Register_medecin'
import Content from'./Components/Content'
import Login_medecin from './Components/Login_medecin'
import Login_patient from './Components/Login_patient'
import Register_patient from './Components/Register_patient'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'




const App =()=> {


  return  (
    <Router>
    <div className={`${styles.app_container}d-flex flex-column `}>
    <Header/>
    <Banner/>

   <Routes>
   <Route path='/' element={<Content  />}/>
   <Route path='/Login_medecin' element={<Login_medecin/>} />

   <Route path='/Register_medecin' element={<Register_medecin/>} />

   <Route path='/Login_patient' element={<Login_patient/>} />
   <Route path='/Register_patient' element={<Register_patient/>} />
   </Routes>

    <Footer/>
    </div>
    </Router>

    );
}

export default App;
