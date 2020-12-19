import React, { useState, useEffect } from 'react';
import '../styles/SearchJob.scss'
import Search from './Search'
import Result from './Result'
import Loading from './Loading'
import axios from 'axios'
import Pagination from './Pagination';


function SearchJob() {
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [url, setUrl] = useState("https://cors-anywhere.herokuapp.com/http://jobs.github.com/positions.json?")
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(4)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get(url, {
                mode: "no-cors"
            });
            setResults(res.data);
            setLoading(false)
        }

        fetchPosts();
    }, [])

    let lastIndex = currentPage * postPerPage
    let firstIndex = lastIndex - postPerPage
    let currentResults =  results.slice(firstIndex, lastIndex)

    return (
        <div id="search-job" className="search-job">
        <h2>Search Your Jobs</h2>
        <div className="search-job-container columns">
            <div className="search-container column is-one-third">
                    <Search 
                        url={url}
                        setUrl={setUrl}
                        loading={loading}
                        setLoading={setLoading}
                        setResults={setResults}
                    />
            </div>
            <div className="result-container column is-two-thirds">
                {loading ? <Loading /> : <Result results={currentResults} />}
            </div>
        </div>
        <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                postsPerPage={postPerPage}
                loading={loading}
                results={results}
            />
        
    </div>
    )
    
}

export default SearchJob;