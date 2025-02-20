import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../contexts/request";
import { useContext } from "react";




function Register_medecin (){

    const {SOURCE}=useContext(Api)
 
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
        
         
      } = useForm({ resolver: yupResolver(formSchema) });

      const submit = async (values) => {
         
        
        console.log(values);
        const response= await fetch(`${SOURCE}/Inscription_Medecin`, {
            
            method:"POST",
    
            headers:{"Content-Type":"application/json"},
    
            body:JSON.stringify(values), 
        });
        const data= await response.json()
        console.log('reponse:',data)
        alert (data.message)
      };

    return (
    <>

<p className="h3"> Enregistrement </p>
<form action="" onSubmit={handleSubmit(submit)} >
        
<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Nom</span>
  <input type="text" className="form-control"  aria-label="Nom" aria-describedby="addon-wrapping" id="Nom" name="Nom" {...register("Nom")} />
</div>

 <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Prenom</span>
  <input type="text" className="form-control"aria-label="Prenom" aria-describedby="addon-wrapping"  id="Prenom" name="Prenom" {...register("Prenom")} />
</div>

<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Mot de passe</span>
  <input type="text" className="form-control"  aria-label="Mot_de_passe" aria-describedby="addon-wrapping" id="Mot_de_passe" name="Mot_de_passe" {...register("Mot_de_passe")} />
</div>

<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Nom hopital</span>
  <input type="text" className="form-control"  aria-label="Nom_Hopital" aria-describedby="addon-wrapping" id="Nom_Hopital" name="Nom_Hopital" {...register("Nom_Hopital")} />
</div>

<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Telephone</span>
  <input type="text" className="form-control"  aria-label="Tel" aria-describedby="addon-wrapping" id="Tel" name="Tel" {...register("Tel")} />
</div>

<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Matricule</span>
  <input type="text" className="form-control"  aria-label="Matricule" aria-describedby="addon-wrapping" id="Matricule" name="Matricule" {...register("Matricule")} />
</div>       

<div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Email</span>
  <input type="text" className="form-control" aria-label="Email" aria-describedby="addon-wrapping"  id="Email" name="Email" {...register("Email")}/>
</div> 

<button type="submit" className="btn btn-primary">Inscrire</button>

</form>
    
    
    </>)
}


export default Register_medecin