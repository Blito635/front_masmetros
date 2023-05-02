import React, { useEffect, useState } from 'react'
import { RealizarPeticion } from '../Tools/Peticiones'
import { Link, useNavigate } from "react-router-dom";
import classes from "./PageHome.module.css"
const apiPoke = "https://pokeapi.co/api/v2/pokemon?"

const UrlPokemon= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const Url2Poke= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"
const { tabla , botones, cartapoke,parrafo } = classes;

const PageHome = () => {
    const validNavigate = useNavigate()
    const [data, setData] = useState(null)
    const [offset, setOffset] = useState(0)
    const [name, setName] = useState(null)

    const PagAdelante = () => {
        setOffset(offset+20)
    }
    const PagAtras = () => {
        if (offset >= 20) {
        setOffset(offset-20)}
    }

const BuscarPokemon =()=>{
    validNavigate("/Data",{state:name})
}
    useEffect(()=>{
        RealizarPeticion(`${apiPoke}limit=20&offset=${offset}`)
      .then((Return_) => {setData(Return_.results);
    })
      .catch((reason) => console.log(reason.message));
    },[offset])
  return (
    <div>
    <div>
        <label htmlFor="">Nombre o id Pokemon</label>
        <input type="text" 
        onChange={(e)=> setName(e.target.value)}
        />
        <button onClick={BuscarPokemon}>Buscar</button>
    </div>
    <div className={tabla}>
        {data?.map(({name},i)=>{
            return(
                <nav key={i}>
                    <Link to="/Data" state={i + 1 +offset} className={parrafo}>
                        <div  className={cartapoke}>
                    <img src={`${UrlPokemon}${i + 1 + offset}.png`}></img>
                        <p >{name}</p>
                        </div>
                    </Link>
                </nav>
            )
        })}
        </div>
        <div className={botones}>
            <button onClick={PagAtras}>Atras</button>
            <button onClick={PagAdelante} >Adelante</button>
        </div>
    
    </div>
  )
}

export default PageHome