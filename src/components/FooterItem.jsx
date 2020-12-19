import React from 'react'

const FooterItem = ({name, pic, content, link}) => {
    return (
        <a className="FooterItem column" href={link} target="_blank">
            <div className="picContainer">
                <i className={pic}></i>
            </div>
            <div className="contentContainer">
            <h5 className="contentTitle">{name}</h5>
            <p className="contentText">{content}</p>
            </div>
        </a>
    )
}
export default FooterItem