import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../contexts/request";

import styles from "./Register.module.scss"
import { useContext } from "react";




function Register_medecin (){

    const {SOURCE}=useContext(Api)

    const defaultValues = {
      Nom: "",
      Prenom: "",
      Mot_de_passe: "",
      Nom_Hopital:"",
      Tel:"",
      Matricule:"",
      Email:""
    };
 
    const formSchema= yup.object({

        Nom: yup.string().required("le champs est obligatoire "),
        Prenom: yup.string().required("le champs est obligatoire "),
        Mot_de_passe: yup.string().required("le champs est obligatoire "),
        Nom_Hopital: yup.string().required("le champs est obligatoire "),
        Tel: yup.string().required("le champs est obligatoire "),
        Matricule: yup.string().required("le champs est obligatoire "),
        Email: yup.string().required("le champs est obligatoire ")


    });


    const {
        handleSubmit,
        register,
        reset,
       
        formState:{errors}
        
         
      } = useForm({ resolver: yupResolver(formSchema),defaultValues });

      const submit = async (values) => {
         
        
        console.log(values);
        const response= await fetch(`${SOURCE}/Inscription_Medecin`, {
            
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
    

  <div  className={`${styles.container}`}>  


<p className="h3 mb-3"> Enregistrement Medecin </p>
<form action="" onSubmit={handleSubmit(submit)} >
<div className="input-group flex-nowrap mb-3 ">
      <span className="input-group-text " id="addon-wrapping" >Nom</span>
      <input type="text" className="form-control"  aria-label="Nom" id="Nom" name="Nom" {...register("Nom")} />
 
    </div>
    {errors?.Nom && <span className="alert alert-danger mb-3 " role="alert">{errors.Nom.message}</span>}
    <div className="input-group flex-nowrap mb-3">
      <span className="input-group-text " id="addon-wrapping" >Prenom</span>
      <input type="text" className="form-control"  aria-label="Prenom" id="Prenom" name="Prenom" {...register("Prenom")} />
    </div>
    {errors?.Prenom && <span className="alert alert-danger mb-3 " role="alert">{errors.Prenom.message}</span>}

    <div className="input-group flex-nowrap mb-3">
      <span className="input-group-text " id="addon-wrapping" >Mot_de_passe</span>
      <input type="text" className="form-control"  aria-label="Mot_de_passe" id="Mot_de_passe" name="Mot_de_passe" {...register("Mot_de_passe")} />
    </div>
    {errors?.Mot_de_passe && <span className="alert alert-danger mb-3 " role="alert">{errors.Mot_de_passe.message}</span>}

    <div className="input-group flex-nowrap mb-3">
      <span className="input-group-text " id="addon-wrapping" >Nom_Hopital</span>
      <input type="text" className="form-control"  aria-label="Nom_Hopital" id="Nom_Hopital" name="Nom_Hopital" {...register("Nom_Hopital")} />
    </div>
    {errors?.Nom_Hopital && <span className="alert alert-danger mb-3 " role="alert">{errors.Nom_Hopital.message}</span>}

    <div className="input-group flex-nowrap mb-3">
      <span className="input-group-text " id="addon-wrapping" >Tel</span>
      <input type="text" className="form-control"  aria-label="Tel" id="Tel" name="Tel" {...register("Tel")} />
    </div>
    {errors?.Tel && <span className="alert alert-danger mb-3 " role="alert">{errors.Tel.message}</span>}

    <div className="input-group flex-nowrap mb-3">
      <span className="input-group-text " id="addon-wrapping" >Matricule</span>
      <input type="text" className="form-control"  aria-label="Matricule" id="Matricule" name="Matricule" {...register("Matricule")} />
    </div>
    {errors?.Matricule && <span className="alert alert-danger mb-3 " role="alert">{errors.Matricule.message}</span>}

    <div className="input-group flex-nowrap mb-3">
      <span className="input-group-text " id="addon-wrapping" >Email</span>
      <input type="text" className="form-control"  aria-label="Email" id="Email" name="Email" {...register("Email")} />
    </div>
    {errors?.Email && <span className="alert alert-danger mb-3 " role="alert">{errors.Email.message}</span>}

    <button type="submit" className="btn btn-primary mb-3">Inscrire</button>
</form>
    
  </div> 
    
    </>)
}


export default Register_medecin