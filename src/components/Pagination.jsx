import React from 'react';
import '../styles/Pagination.scss'
// import { Container } from './styles';

function Pagination({ currentPage, setCurrentPage, postsPerPage, results, loading}) {
  
    let Page = [] 

    for (let i = 1; i <= Math.ceil(results.length/postsPerPage); i++) {
        Page.push(i)
    }

    const nextClick = () => {
        setCurrentPage(currentPage+1)
    }

    const prevClick = () => {
        setCurrentPage(currentPage-1)
    }

    if (!loading) {
        return (
            <nav className="pagination" role="navigation" aria-label="pagination">

                {currentPage === 1 ? 
                    <a className="pagination-previous" disabled>Previous</a> :
                    <a className="pagination-previous" onClick={prevClick}>Previous</a>
                }

                {currentPage === Math.ceil(results.length/postsPerPage) ?
                    <a className="pagination-next" disabled>Next page</a> :
                    <a className="pagination-next" onClick={nextClick}>Next page</a>
                }

                <ul className="pagination-list">
                    {Page.map((item, index) => {
                        return (
                            <li className="pagination-item" key={index}>
                                {currentPage === item ? 
                                    <a style={{backgroundColor: "hsl(171, 100%, 41%)", color: "white", border: "none"}} onClick={()=> setCurrentPage(item)}className="pagination-link is-current" aria-label="Page 1" aria-current="page">{item}</a> :
                                    <a style={{color: "hsl(171, 100%, 41%)!important", backgroundColor: "white", borderColor: "#4a4a4a"}}onClick={()=> setCurrentPage(item)}className="pagination-link is-current" aria-label="Page 1" aria-current="page">{item}</a>
                                }
                                
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
    else {
        return null
    }
}

export default Pagination;