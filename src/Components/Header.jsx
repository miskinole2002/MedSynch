import styles from "../assets/styles/Header.module.scss";
import logo from"../assets/images/MedSync1.png"
import { Link } from "react-router-dom";
import Logo from "./Logo";


const Header=()=> {




    
    return<>


<div className={`${styles.header} d-flex flex-row align-items-center navbar navbar-expand-md navbar-light container-fluid  `} >
<Logo logo={logo}/>

        <ul className="navbar-nav me-auto mb-2 mb-md-0 flex-fill">
          <li className="nav-item">
          
            <Link className="nav-link active"  to="/">Accueil</Link>
          </li>
          <li className="nav-item">
         
            <Link className="nav-link active" to="/Login_medecin">connexion medecin</Link>

          </li>
          <li className="nav-item ">
           

            <Link className="nav-link active" to="/Login_patient">connexion Patient</Link>
          </li>

  </ul>
  <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    plus...
  </a>

  <ul className="dropdown-menu">
    <li>< Link className="dropdown-item" to="/Register_patient">inscrition patient </Link></li>
    <li><Link className="dropdown-item" to="/Register_medecin">inscription medecin</Link></li>
    <li><Link className="dropdown-item" href="#">ajouter...</Link></li>
  </ul>
</div>



</div>

{/* <header>

  <nav className="navbar navbar-expand-md navbar-light fixed-top " style={{backgroundColor: "#e3f2fd"}}>
    <div className="container-fluid">
      
      <a className="navbar-brand" href="#">Accueil</a>
    
        <img src="../assets/images/MedSync.png" alt="" />
      
      
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Accueil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <div className="d-flex">
            
        </div>
      </div>
    </div>
  </nav>
</header> */}
    
    </>
}

export default Header