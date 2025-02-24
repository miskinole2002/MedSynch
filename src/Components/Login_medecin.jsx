import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../contexts/request";
import { useContext } from "react";
import styles from "../assets/styles/Connexion.module.scss"




function Login_medecin (){

    const {SOURCE}=useContext(Api)
 
    const formSchema= yup.object({

        Email: yup.string().required("le champs est obligatoire "),
        Mot_de_passe: yup.string().required("le champs est obligatoire "),


    });


    const {
        handleSubmit,
        register,
        
         
      } = useForm({ resolver: yupResolver(formSchema) });

      const submit = async (values) => {
         
        
        console.log(values);
        const response= await fetch(`${SOURCE}/Connect_Medecin`, {
            
            method:"POST",
    
            headers:{"Content-Type":"application/json"},
    
            body:JSON.stringify(values), 
        });
        const data= await response.json()
        console.log('reponse:',data)
        alert (data.message.nom+" "+ "bienvenue dans votre profil ")
      };

    return (<>

<div  className="image_accueil" >
       <img src="src/assets/images/Baner_img.png" alt="" />
</div>
  <div className={`${styles.menuConnexion} border p-20 text_accueil m-10 p-10`} style={{ maxHeight: "500px", overflowY: "auto" }}>  

    <p className="h3 mb-3"> Connection Medecin </p>


   

<form action="" onSubmit={handleSubmit(submit)} >
        

<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">Email</span>
  <input type="text" className="form-control" aria-label="Email" aria-describedby="addon-wrapping"  id="Email" name="Email" {...register("Email")}/>
</div> 



<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">Mot de passe</span>
  <input type="text" className="form-control"  aria-label="Mot_de_passe" aria-describedby="addon-wrapping" id="Mot_de_passe" name="Mot_de_passe" {...register("Mot_de_passe")} />
</div>




<button type="submit" className="btn btn-primary mb-3">Connection</button>

</form>
</div>
    </>)
    

   
}


export const ImageAccueil = () => {
   
  return (
    <div  className="image_accueil" >
      <img src="src/assets/images/Baner_img.png" alt="" />
    </div>
  );}

export default Login_medecin