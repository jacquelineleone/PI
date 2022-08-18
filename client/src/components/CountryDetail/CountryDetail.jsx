import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';
import { getById } from "../../actions";
import Activity from "./Activity";
import { 
    GlassCard, 
    Titulo,
    Texto,
    Flag, 
    Contenedor,
    ButtonVolver
} from './CountryDetail.js'

export default function CountryDetail() {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getById(id))
    }, [dispatch, id])

    const country = useSelector((state) => state.detail)

    return(
        <div>
            {country ? (
                <Contenedor>
                    <GlassCard>
                        <Flag src={country.image} alt={'image not found'}/>
                        <Titulo>{country.name}</Titulo>
                        <Texto>ID: {country.id}</Texto>
                        <Texto>Capital: {country.capital}</Texto>
                        <Texto>Subregion: {country.subregion}</Texto>
                        <Texto>Continent: {country.continent}</Texto>
                        <Texto>Area: {country.area}</Texto>
                        <Texto>Population: {country.population}</Texto>
                        <NavLink to={"/home"}><ButtonVolver>Volver</ButtonVolver></NavLink>
                    </GlassCard>
                    <div>
                        {country.activities > 0 ? country.activities.map(a => (
                            <Activity key={a.name} a={a}/>
                        )) : null}
                    </div>
                </Contenedor>

            ) : <p>Loading...</p>}
        </div>
    )

}
