import { Fragment } from "react"
import parse from "html-react-parser";
import { accueil } from "../data/data";


const Accueil=()=>{
    const description= accueil;
    console.log(description.titre)






    return(
<Fragment>

<ImageAccueil/>
<DescriptionAccueil description={description}/>
    
</Fragment>




    )
   


}

export const ImageAccueil = () => {
   
    return (
      <div  className="image_accueil" >
        <img src="src/assets/images/Baner_img.png" alt="" />
      </div>
    );
}


export const DescriptionAccueil =({description}) =>{
    const {titre,texte}=description
    return (
        <div className="text_accueil m-20 p-20">
            <h1> {titre}</h1>
            
            {parse(texte)}
            
        </div>

    )
}
export default Accueil
