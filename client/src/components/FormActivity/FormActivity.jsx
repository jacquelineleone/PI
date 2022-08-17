import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll, postActivity } from "../../actions";
import { Link } from "react-router-dom";

function validate(input){
    let errors = {};
    if(!input.name){
        errors.name = 'Activity name required'
    }
    if(!input.duration){
        errors.duration = 'Duration is required'
    }
    if(!input.difficulty){
        errors.difficulty = 'Difficulty is required'
    }
    if(!input.season){
        errors.season = 'Season is required'
    } 

    return errors;
}


export default function FormActivity() {

    let dispatch = useDispatch();

    let allCountries = useSelector((state) => state.allCountries)

    let [input, setInput] = useState({
        name: '', 
        difficulty: '', 
        duration: '', 
        season: '', 
        idCountry: [],
    })

    let [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleCheck(e){
        e.preventDefault();
        if(e.target.checked){
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
        }
    }

    function handleSelect(e){
        e.preventDefault();
        setInput({
            ...input,
            idCountry: [...input.idCountry, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postActivity(input));
        alert('Actividad creada con exito!');
        setInput({
            name: '', 
            difficulty: '', 
            duration: '', 
            season: '', 
            idCountry: [],
        })
    }

    function handleDelete(c){
        setInput({
            ...input,
            idCountry: input.idCountry.filter(el => el !== c)
        })
    }

    return(
        <React.Fragment>
            {/* reemplazar button x imagen */}
            <Link to='/home'><button>VOLVER</button></Link>
            <br/>
            <div>Create Activity</div>
            <br/>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name</label>
                    <input type={'text'} name={'name'} value={input.name} onChange={(e) => handleChange(e)}/>
                    {errors.name && (<p className="error">{errors.name}</p>)}
                </div>  
                <div>
                    <label>Duration</label>
                    <input input type={'number'} name={'duration'} value={input.duration} onChange={(e) => handleChange(e)}/>
                    {errors.duration && (<p className="error">{errors.duration}</p>)}
                </div>
                <div>
                    <label>Difficulty</label>
                    <label><input type={'checkbox'} name={'difficulty'} value={'1'} onChange={(e) => handleCheck(e)}/>1</label>
                    <label><input type={'checkbox'} name={'difficulty'} value={'2'} onChange={(e) => handleCheck(e)}/>2</label>
                    <label><input type={'checkbox'} name={'difficulty'} value={'3'} onChange={(e) => handleCheck(e)}/>3</label>
                    <label><input type={'checkbox'} name={'difficulty'} value={'4'} onChange={(e) => handleCheck(e)}/>4</label>
                    <label><input type={'checkbox'} name={'difficulty'} value={'5'} onChange={(e) => handleCheck(e)}/>5</label>
                </div>
                <div>
                    <label>Season</label>
                    <label><input input type={'checkbox'} name={'season'} value={'Verano'} onChange={(e) => handleCheck(e)}/>Verano</label>
                    <label><input input type={'checkbox'} name={'season'} value={'Otoño'} onChange={(e) => handleCheck(e)}/>Otoño</label>
                    <label><input input type={'checkbox'} name={'season'} value={'Invierno'} onChange={(e) => handleCheck(e)}/>Invierno</label>
                    <label><input input type={'checkbox'} name={'season'} value={'Primavera'} onChange={(e) => handleCheck(e)}/>Primavera</label>
                </div>
                <div>
                    <label>Countries</label>
                    <select onChange={(e) => handleSelect(e)}>
                        {allCountries.map((c) => (
                            <option value={c.id}>{c.name}</option>
                        ))}
                    </select>
                    {input.idCountry.map(c =>
                        <div className="divCountry">
                            <p>{c}</p><button className="buttonX" onClick={() => handleDelete(c)}>X</button>
                        </div>
                    )}
                </div>
                <br/>
                <button type="submit">Crear</button>
            </form>
        </React.Fragment>

    )
}