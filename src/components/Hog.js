import React, {useState} from "react";


function Hog({name,specialty,greased,weight, medal, image}) {
    const [showDetails, setShowDetail] = useState(false)
    function handleClick(){
        setShowDetail(!showDetails)
    }

    return (
        <div onClick={handleClick} className='ui card eight wide column pigTile ' >
            <div className="image"> <img src={image} alt="pigPic"></img></div>
            
            <div className='content'  ><h2>{name}</h2></div>
            
            {showDetails ? <div className="hidden content">
                Specialty: {specialty} <br/>
                Weight: {weight} <br/>
                {greased ? 'Greased' : 'Not greased'} <br/>
                Highest Medal Achieved: {medal}
            </div> : null }

        </div>
    )

}

export default Hog;
// minPigTile maxPigTile
// style={{backgroundImage: `url(${image})`}}