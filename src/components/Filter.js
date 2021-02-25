import React, { useState } from "react";


function Filter({ filteredHogs, setFilteredHogs, allHogs }) {
    const [greased, setGreased] = useState(false)
    // const [sort, setSort] = useState("name")
    

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

    function handleSort(e) {
        console.log(e.target.value)
        if (e.target.value === 'name') {
            const sortedHogs = filteredHogs.sort(function(a, b) {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
            });
            setFilteredHogs([...sortedHogs])
            console.log('filteredHogs: ', filteredHogs);
        } else if(e.target.value === 'weight'){
            const weightSorted = filteredHogs.sort(function (a, b) {
                return a.weight - b.weight;
              });
             setFilteredHogs([...weightSorted])
              console.log('after weight: ', filteredHogs);
        }
    }


  return (
      <div>
        <button onClick={handleClick} type="button">{greased ? 'This no longer pleases me, All Piggies!' : 'Show me those Greased Piggies!'}</button>
        <label>Sort Pigs:</label>
        <select onChange={handleSort} name="pigs" id="pigs">
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
        </div>
  );
}

export default Filter;
