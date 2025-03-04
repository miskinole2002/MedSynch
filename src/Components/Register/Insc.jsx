
import { Link } from 'react-router-dom';
import styles from "./Insc.module.scss"


const Insc=()=>{





    return <>
     <div className={`${styles.signup_container}`}>
      <div className ={`${styles.signup_header}`}>
        <h1>Créer un compte</h1>
        <p>Veuillez choisir votre rôle pour commencer l'inscription</p>
      </div>

      <div className={`${styles.signup_options}`}>
        <Link to="/Insc/medecin" className={`medecin ${styles.signup_card}`}>
          <h2>Médecin</h2>
          <p>Accédez à un espace dédié aux professionnels de santé</p>
        </Link>

        <Link to="/Insc/patient" className={` patient ${styles.signup_card}`}>
          <h2> Patient</h2>
          <p>Bénéficiez d'un suivi médical sécurisé et accessible</p>
        </Link>
      </div>

     
    </div>
    </>
}

export default  Insc 