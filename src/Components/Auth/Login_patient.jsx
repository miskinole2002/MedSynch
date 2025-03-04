import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../contexts/request";
import { useContext } from "react";
import styles from "./Log.module.scss"





function Login_patient (){

    const {SOURCE}=useContext(Api)
 
    const formSchema= yup.object({

        Email: yup.string().required("le champs est obligatoire "),
        Mot_de_passe: yup.string().required("le champs est obligatoire "),


    });

    const defaultValues = {
      Email:"",
      Mdp: ""
    };
    const {
        handleSubmit,
        register,
        reset,
        formState:{errors}
        
         
      } = useForm({ resolver: yupResolver(formSchema),defaultValues });

      const submit = async (values) => {
         
        
        console.log(values);
        const response= await fetch(`${SOURCE}/Connect_Patient`, {
            
            method:"POST",
    
            headers:{"Content-Type":"application/json"},
    
            body:JSON.stringify(values), 
        });
        const data= await response.json()
        reset(defaultValues)
        console.log('reponse:',data)
        alert (data.message.nom+" "+ "bienvenue dans votre profil ")
      };

    return (<>


  <div className={`${styles.container}`}>  

    <p className="h3 mb-3"> Connection Patient  </p>


   

<form action="" onSubmit={handleSubmit(submit)} >
        

<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">Email</span>
  <input type="text" className="form-control" aria-label="Email" aria-describedby="addon-wrapping"  id="Email" name="Email" {...register("Email")}/>
</div> 
{errors?.Email && <span className="alert alert-danger mb-3 " role="alert">{errors.Email.message}</span>}


<div className="input-group flex-nowrap mb-3">
  <span className="input-group-text" id="addon-wrapping">Mot de passe</span>
  <input type="text" className="form-control"  aria-label="Mdp" aria-describedby="addon-wrapping" id="Mdp" name="Mdp" {...register("Mdp")} />
</div>
{errors?.Mdp && <span className="alert alert-danger mb-3 " role="alert">{errors.Mdp.message}</span>}




<button type="submit" className="btn btn-primary mb-3">Connection</button>

</form>
</div>
    </>)
    

   
}




export default Login_patient