import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  return <div className="ui cards">
    {pets.map(pet => { return (
      <Pet 
        id={pet.id}  
        key={pet.id}  
        type={pet.type}
        gender={pet.gender}
        age={pet.age}
        weight={pet.weight}
        name={pet.name}
        isAdopted={pet.isAdopted}
        onAdoptPet={onAdoptPet}
      />
    )})}
  </div>;
}

export default PetBrowser;
