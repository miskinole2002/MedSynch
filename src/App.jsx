import './App.css'
// import Register_medecin from './Components/Register_medecin'
import Login_medecin from './Components/Login_medecin'

import Register_patient from './Components/Register_patient'

import Login_patient from './Components/Login_patient' 
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {


  return (
    <>
    <Header/>
      {/* < Register_medecin/> */}
      {/* < Login_medecin/> */}
      <Register_patient/>
      {/* < Login_patient/> */}
    <Footer/>
    </>
  )
}

export default App
