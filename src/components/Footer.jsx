import React from 'react'
import FooterList from './FooterList'
import FooterItem from './FooterItem'
import '../styles/Footer.scss'

const Footer = () => {
    return(
        <div id="Footer" className="Footer">
            <div className="footer-list-container  columns is-mobile">
                {FooterList.map((item, index) => {
                    return (
                        <FooterItem key={index} name={item.name} pic={item.pic} content={item.content} link={item.link}/>
                    )
                })}
            </div>
            <br />
            <div className="copyright">
                Fadhil Muhammad Rafi &#169; 2020 - Test DanS Multi Pro
            </div>
            
        </div>
       
    )
}

export default Footer