import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const getPets = (param = '') => {
    fetch(`http://localhost:3001/pets${param}`)
    .then(resp=>resp.json())
    .then(data=>setPets(data))
  }
  
  useEffect(() => {getPets()}, [])

  const onChangeType = (e) => {
    setFilters(e.target.value)
  }

  const onFindPetsClick = (e) => {
    switch(filters) {
      case 'all' :
        getPets()
        break;
      case 'cat' :
        getPets('?type=cat')
        break;
      case 'dog' :
        getPets('?type=dog')
        break;
      case 'micropig' :
        getPets('?type=micropig')
        break;
    }
  }

  const onAdoptPet = (e) => {
    const updatedPetsAfterAdoption = pets.map(pet => {
      if (pet.id === e.target.id) {
        return (
          {
            name: pet.name,
            id: pet.id,
            isAdopted: true,
            weight: pet.weight,
            age: pet.age,
            type: pet.type,
            gender: pet.gender
          }
        )
      } else {
        return pet
      }
    })
    setPets(updatedPetsAfterAdoption)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              onChangeType={onChangeType}
              onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser 
              pets={pets}
              onAdoptPet={onAdoptPet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
