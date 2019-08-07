import React from 'react';
import './Ninjas.css'

const NinjasFunction = ({ ninjas, deleteNinja }) => {
    // const {ninjas} = props;
    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 25) {

            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={() => deleteNinja(ninja.id)}>Delete Ninja</button>
                </div>
            )
        }
        else {
            return null
        }
    })

    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default NinjasFunction;