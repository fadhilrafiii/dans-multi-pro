import React from 'react';

// import { Container } from './styles';


function Modal(props) {
    const hide = () => {
        let modal = document.getElementById(`modal-${props.id}`)
        modal.classList.remove("show")
    }

  return (
    <div id={`modal-${props.id}`} className="modal">

   
        <div className="modal-content">
            <span className="close" onClick={() => hide()}>&times;</span>
            <h2>{props.title}</h2>
            <img src={props.company_logo} alt=""/>
            <h5>{props.company}</h5>
            <br/>
            {props.description}
            <br/>
            {props.how}
        
        </div>
    
    </div>
  );
}

export default Modal;