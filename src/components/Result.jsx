import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Modal from './Modal'

function Result({results}) {
    let current = new Date()

    function convertDate (date) {
        let newDate = new Date(date)
    
        return Math.floor((current.getTime() - newDate.getTime())/1000/3600/24)
    }

    const [id, setId] = useState("")

    function displayModal(id) {
        let a = document.getElementById(id)
        let modal = document.getElementById(`modal-${a.id}`)
        modal.classList.toggle("show")
    }

    return (
        <div className="result">
            {results.map((item) => {
                return (
                   <div key={item.id}>
                    <div onClick={() => displayModal(item.id)} 
                        id={item.id}
                        className="job-link" href="">
                            <div  className="job columns">
                                <div className="leftContent is-two-thirds">
                                    <h3>{item.title}</h3>
                                    <h6>{item.location}</h6>
                                    <p>{item.type}</p>
                                    <br />
                                    <p>{`${convertDate(item.created_at)} days`}</p>
                                </div>
                                <div className="rightContent column is-one-third">
                                    <img src={item.company_logo} alt=""/>
                                    <br />
                                    <p>{item.company}</p>
                                </div>
                            </div>  
                        </div>
                        <Modal 
                        id={item.id} 
                        title={item.title}
                        how={item.how_to_apply}
                        description={item.description}
                        company_logo={item.company_logo}
                        company={item.company} />
                   </div>
                )
            })}
        </div>
    );
}

export default Result;