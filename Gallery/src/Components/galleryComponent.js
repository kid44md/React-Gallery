import { galleryList } from "../data/galleryArray"
import { useState } from "react";
export function Gallery (){
    const [index, setIndex] = useState(0);
    const [showImage, setShowImage] = useState(false);
    let galleryImage = galleryList[index];

function handleNextClick(){
    if (index < galleryList.length - 1){
      setIndex(index + 1);  
    }
    
}
function handleLastClick(){
    if(galleryList.length > index && index !=0 ){
        setIndex(index - 1);
    }
}

function handleShowDescription(){
    setShowImage(!showImage);
}
    return  (
        <>
        <div>
             <h3 style={{textAlign:'center'}}>    
                Basic gallery
            </h3>
        </div>
           <div>
            <button onClick={handleNextClick}>Next Image</button>
            <button onClick={handleLastClick}>Previous Image</button>
           </div>
           <div>
            <p>{index + 1} of {galleryList.length}</p>
            <div>
            <img style={{height: '300px', width:'400px'}} src={galleryImage.image}></img>
            </div>
            <button onClick={handleShowDescription}>{showImage ? 'Hide' : 'Show'} Description</button>
           {showImage && <div>
            <h3>description:</h3>
            <p>{galleryImage.description}</p>
            </div>} 
           </div>
            {/* <img src="./img/Double D.jpg"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOAeMAk2uW2KU9usy3dKfEk46zjkLEi9u25_VnKUwXUwnIg0o"/>
          <img src="images/Nintendo DS.jpg"/>
          <img src={image.image}></img> */}
         
        </>
            
        
    )
}
