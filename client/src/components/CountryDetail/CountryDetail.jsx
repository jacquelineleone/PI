import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { getById } from "../../actions";
import Activity from "./Activity";

export default function CountryDetail() {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getById(id))
    }, [dispatch])

    const country = useSelector((state) => state.detail)

    return(
        <div>
            {country ? (
                <div>
                    <div>
                        <img src={country.image}/>
                        <h1>{country.name}</h1>
                        <h2>ID: {country.id}</h2>
                        <h2>Capital: {country.capital}</h2>
                        <h2>Subregion: {country.subregion}</h2>
                        <h2>Continent: {country.continent}</h2>
                        <h2>Area: {country.area}</h2>
                        <h2>Population: {country.population}</h2>
                    </div>
                    <div>
                        {country.activities > 0 ? country.activities.map(a => (
                            <Activity key={a.name} a={a}/>
                        )) : null}
                    </div>
                </div>

            ) : <p>Loading...</p>}
        </div>
    )

}
