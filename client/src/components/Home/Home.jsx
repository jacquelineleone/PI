import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getAll, filterCountriesByContinent, orderByName, orderByPopulation } from "../../actions";
import { Container } from "./Home";

export default function Home() {

    let dispatch  = useDispatch();
    let allCountries = useSelector((state) => state.countries);


    //Paginado

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const [order, setOrder] = useState('');
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch]);

    function handleFilterContinent(e){
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value));
    }

    function handleSortName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado de ${e.target.value}`);
    }

    function handleSortPopulation(e){
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado de ${e.target.value}`);
    }

    return(
        <div>   
            <Container>
                {
                    currentCountries && currentCountries.map(c => 
                        <Card id={c.id} image={c.image} name={c.name} continent={c.continent}/>
                    )
                }
            </Container>
            <div>
                {/* Filter by Name */}
                <select onClick={(e) => handleSortName(e)}>
                    <option>Sort by Name</option>
                    <option>A to Z</option>
                    <option>Z to A</option>
                </select>

                {/* Filter by Continent */}
                <select onClick={(e) => handleFilterContinent(e)}>
                    <option>Filter by Continent</option>
                    <option>Europe</option>
                    <option>North America</option>
                    <option>South America</option>
                    <option>Africa</option>
                    <option>Oceania</option>
                    <option>Antarctica</option>
                </select>

                {/* Filter by Activity */}
                <select>
                    <option>Filter by Activity</option>

                </select>                

                {/* Filter by Population */}
                <select onClick={(e) => handleSortPopulation(e)}>
                    <option>Sort by Population</option>
                    <option>Highest to lowest</option>
                    <option>Lowest to highest</option>
                </select>
            </div>
            <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginado={paginado}/>
            <SearchBar/>
        </div>
    )
}
