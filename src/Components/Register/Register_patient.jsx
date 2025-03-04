import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../contexts/request";
import { useContext } from "react";
import styles from "./register.module.scss"






function Register_patient (){

    const {SOURCE}=useContext(Api)
    
    const defaultValues = {
      Nom: "",
      Prenom: "",
      Date_Naissance:"",
      Genre:"",
      Identifiant_Parent:"",
      Adresse: "",
      Email:"",
      NAS: "",
      Mdp: ""
    };
 
 
    const formSchema= yup.object({

        Nom: yup.string().required("le champs est obligatoire "),
        Prenom: yup.string().required("le champs est obligatoire "),
        Date_Naissance: yup.string().required("le champs est obligatoire "),
        Genre: yup.string().required("le champs est obligatoire "),
        Identifiant_Parent: yup.string().required("le champs est obligatoire "),
        Adresse: yup.string().required("le champs est obligatoire "),
        Email: yup.string().required("le champs est obligatoire "),
        NAS: yup.string().required("le champs est obligatoire "),
        Mdp: yup.string().required("le champs est obligatoire ")
    });


    const {
        handleSubmit,
        register,
        reset,
       
        formState:{errors}
        
         
      } = useForm({ resolver: yupResolver(formSchema),defaultValues });

      const submit = async (values) => {
         
        
        console.log(values);
        const response= await fetch(`${SOURCE}/Inscription_Patient`, {
            
            method:"POST",
    
            headers:{"Content-Type":"application/json"},
    
            body:JSON.stringify(values), 
        });
        const data= await response.json()
        reset(defaultValues)
        console.log('reponse:',data)
        alert (data.message)
      };

    return (
    <>
  <div className="image_accueil">
<img src="/images/Baner_img.png" alt= ""/>
</div>
  <div className={`${styles.container}`}> 
<p className="h3 mb-3"> Enregistrement </p>
<form action="" onSubmit={handleSubmit(submit)} >
        
<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">Nom</span>
  <input type="text" className="form-control"  aria-label="Nom" aria-describedby="addon-wrapping" id="Nom" name="Nom" {...register("Nom")} />
</div>
{errors?.Nom && <span className="alert alert-danger mb-3 " role="alert">{errors.Nom.message}</span>}


 <div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">Prenom</span>
  <input type="text" className="form-control"aria-label="Prenom" aria-describedby="addon-wrapping"  id="Prenom" name="Prenom" {...register("Prenom")} />
</div>
{errors?.Prenom && <span className="alert alert-danger mb-3 " role="alert">{errors.Prenom.message}</span>}



<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">date de naissance</span>
  <input type="text" className="form-control"  aria-label="Date_Naissance" aria-describedby="addon-wrapping" id="Date_Naissance" name="Date_Naissance" {...register("Date_Naissance")} />
</div>
{errors?.Prenom && <span className="alert alert-danger mb-3 " role="alert">{errors.Prenom.message}</span>}


<div className="input-group mb-3">
  <label className="input-group-text" htmlFor="Genre">genre</label>
  <select className="form-select"   id="Genre" name="Genre" {...register("Genre")}  >
    <option selected>choississez...</option>
    <option value="Masculin">Masculin</option>
    <option value="Feminin">Feminin</option>
    <option value="Ne rien dire">Ne rien dire </option>
  </select>
</div>
{errors?.Prenom && <span className="alert alert-danger mb-3 " role="alert">{errors.Prenom.message}</span>}


<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">Identifiant Parent</span>
  <input type="text" className="form-control"  aria-label="Identifiant_Parent" aria-describedby="addon-wrapping" id="Identifiant_Parent" name="Identifiant_Parent" {...register("Identifiant_Parent")} />
</div>       
{errors?.Prenom && <span className="alert alert-danger mb-3 " role="alert">{errors.Prenom.message}</span>}

<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">Adresse</span>
  <input type="text" className="form-control"  aria-label="Adresse" aria-describedby="addon-wrapping" id="Adresse" name="Adresse" {...register("Adresse")} />
</div>
{errors?.Adresse && <span className="alert alert-danger mb-3 " role="alert">{errors.Adresse.message}</span>}

<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">Email</span>
  <input type="text" className="form-control" aria-label="Email" aria-describedby="addon-wrapping"  id="Email" name="Email" {...register("Email")}/>
</div> 
{errors?.Email && <span className="alert alert-danger mb-3 " role="alert">{errors.Email.message}</span>}

<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">Numero d assurance social</span>
  <input type="text" className="form-control"  aria-label="NAS" aria-describedby="addon-wrapping" id="NAS" name="NAS" {...register("NAS")} />
</div>
{errors?.NAS && <span className="alert alert-danger mb-3 " role="alert">{errors.NAS.message}</span>}

<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">Mot de passe</span>
  <input type="text" className="form-control"  aria-label="Mdp" aria-describedby="addon-wrapping" id="Mdp" name="Mdp" {...register("Mdp")} />
</div>
{errors?.Mdp && <span className="alert alert-danger mb-3 " role="alert">{errors.Mdp.message}</span>}

<button type="submit" className="btn btn-primary mb-3">Inscrire</button>

</form>
    
    </div>
    </>)
}


export default Register_patient