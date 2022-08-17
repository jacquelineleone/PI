import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../actions";

export default function SearchBar(){

    const dispatch = useDispatch();

    const [name, setName] = useState('')

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getByName(name));
        setName('');
    }

    return (
        <div>
            <input type='text' placeholder="Search..." onChange={(e) => handleInputChange(e)}/>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )
}
