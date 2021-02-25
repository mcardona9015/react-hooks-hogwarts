import React, {useState} from "react";


function Hog({name,specialty,greased,weight, medal, image}) {
    const [showDetails, setShowDetail] = useState(false)
    const [visible, setVisible] = useState(true)
    
    function handleClick(){
        setShowDetail(!showDetails)
    }

    function handleHide(){
        console.log('')
    }

    return (
        <div onClick={handleClick} className='ui card eight wide column pigTile ' >
            <div className="image"> 
                <img src={image} alt="pigPic"></img>
            </div>
            
            <h2>{name}</h2>
            
            {showDetails ? <div className="undisplayed-content">
                Specialty: {specialty} <br/>
                Weight: {weight} <br/>
                {greased ? 'Greased' : 'Not greased'} <br/>
                Highest Medal Achieved: {medal}
            </div> : null }

            <button onClick={handleHide} type="button">{visible ? 'Hide this here Hog!' : 'Get back here lil\' Piggie'}</button>
        </div>
    )

}

export default Hog;
// minPigTile maxPigTile
// style={{backgroundImage: `url(${image})`}}
// visible ? style={{display:""}} : style={{display:"none"}}