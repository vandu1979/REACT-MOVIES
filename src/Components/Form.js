import React from 'react'
 // eslint-disable-next-line
import { useState, useEffect} from 'react';

// you can destructure your props directly get on the parameter list
export default function Form(props) {

    //State to hold the data of our form
    const [formData, setFormData] = useState({
        searchterm: ''
    })

    // handlechange = update formdata when we type into form
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        // prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to moviesearch prop, which is getMovie function
        props.movieSearch(formData.searchterm)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text" 
            name="searchterm"
            onChange={handleChange}
            />
            <input type="submit" value="submit" />

        </form>   
    </div>
  )
}
