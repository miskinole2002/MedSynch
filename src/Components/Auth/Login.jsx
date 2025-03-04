import styles from "./Login.module.scss"
import { Link } from 'react-router-dom';



const Login =()=>{





    return <>
    
    <div className={`${styles.signup_container}`}>
      <div className ={`${styles.signup_header}`}>
        

      <div className={`${styles.signup_options}`}>
        <Link to="/Auth/medecin" className={`medecin ${styles.signup_card}`}>
          <h2>Médecin</h2>
          <p>Pour un monde plus connecte</p>
        </Link>

        <Link to="/Auth/patient" className={` patient ${styles.signup_card}`}>
          <h2> Patient</h2>
          <p>Plus de rapidite et de securite</p>
        </Link>
      </div>
      </div>

     
    </div>
    
    
    </>
}

export default Login