import React, { useState } from "react";


function Filter({ filteredHogs, setFilteredHogs, allHogs }) {
    const [greased, setGreased] = useState(false)

    function handleClick(){
        if (!greased) {
            const newFilterHogs= allHogs.filter((hog) => (
                hog.greased === true
            ) )
            setFilteredHogs(newFilterHogs)
        } else {
            setFilteredHogs(allHogs)
        }
        
        setGreased(!greased)
    }
  return (
      <div>
        <button onClick={handleClick} type="button">{greased ? 'This no longer pleases me, All Piggies!' : 'Show me those Greased Piggies!'}</button>
        <label>Sort Pigs:</label>
        <select name="pigs" id="pigs">
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
        </div>
  );
}

export default Filter;
