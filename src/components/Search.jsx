import React, { useState } from 'react';
import axios from 'axios'

function Search({url, setUrl, loading, setLoading, setResults}) {

  const [input, setInput] = useState({
    description: "",
    location: "",
    full_time: false
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    
    if (name === "full_time") {
      setInput(prev => {
        return (
            {
                ...prev,
                [name]: !prev.full_time
            }
        )
      })
    } else {
      setInput(prev => {
        return (
            {
                ...prev,
                [name]: value
            }
        )
      })
    } 
  }

  const handleClick = () => {
    if (input.description) {
      url += `description=${input.description}&`
    }
    if (input.location) {
      url += `location=${input.location}&`
    }
    if (input.full_time) {
      url += `full_time=${input.full_time}&`
    }

    setUrl(url)

    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get(url, {
          mode: "no-cors"
      });
      setResults(res.data);
      setLoading(false)
    }

    fetchPosts();
    setUrl("https://cors-anywhere.herokuapp.com/http://jobs.github.com/positions.json?")
  }

  return <div className="search">
      <div className="field">
        <label>Description</label>
        <input onChange={handleChange} className="input" type="text" placeholder="Description" name="description" value={input.description}/>  
      </div>

      <div className="field">
        <label>Location</label>
        <input onChange={handleChange} className="input" type="text" placeholder="Location" name="location" value={input.location}/>  
      </div>

      <div className="field checkbox">
        
        <input onChange={handleChange} type="checkbox" id="checkbox" name="full_time"/>
        <label htmlFor="checkbox" value="true">Fulltime
        </label>
      </div>
    
      <div className="buttons">
            <a onClick={() => handleClick()}className="button is-light">
                Search
            </a>
        </div>
      
</div>
}

export default Search