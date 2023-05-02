import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { RealizarPeticion } from '../../Tools/Peticiones'
import classes from "./DataPoke.module.css"


const {nombre,tipo,targeta, name} = classes;

const apiPoke = "https://pokeapi.co/api/v2/pokemon/"



const DataPoke = () => {
    const validNavigate = useNavigate()
    const location = useLocation();
    const [data, setData] = useState(null)
    console.log(location)
    useEffect(()=>{
        RealizarPeticion(`${apiPoke}${location.state}/`)
      .then((Return_) => {setData(Return_);
    
    console.log(Return_);
    })
      .catch((reason) => console.log(reason.message));
    },[location.state])

  return (
    <div className={targeta}>    
        <div className={nombre}> 
            <h1 className={name}>{data?.name}</h1>
            <h2>{data?.id}</h2>
        </div>
        <div>
            {data?.types.length > 1 ? (
                <div className={tipo}>
                    <h3 className={name}>{data?.types[0].type.name} </h3> 
                    <h3>{data?.types[1].type.name}</h3>
                </div>
            ): data?.types.length  === 1 ?(
                <div className={tipo}>
                    <h3>{data?.types[0].type.name} </h3>
                </div>
            ):(<></> )}
        </div>
        <img src={data?.sprites.other["official-artwork"].front_default} alt="" />
        <button onClick={()=>{validNavigate("/")}}> Volver </button>
    </div>
  )
}

export default DataPoke