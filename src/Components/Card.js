import React from 'react'
import house from '../images/house.png'
import sizeIcon from '../images/sizeIcon.svg'
import bedIcon from '../images/bedIcon.svg'
import toiletIcon from '../images/toiletIcon.svg'
import moreInfo from '../images/moreInfo.svg'
import { Link } from 'react-router-dom'


function Card() {
    return (
        <div className='card_container'>
            <img src={house} alt='' />
            <div className='card_name'>
                <h2>Ático Dúplex de Obra Nueva <br></br></h2>
                <p>Marianao, Sant Boi de Llobregat</p>
            </div>
            <div className='card_info'>
                <div className='info_icons'>
                    <div className='icon'>
                        <img src={sizeIcon} alt='' />
                        <p>102m^</p>
                    </div>
                    <div className='icon'>
                        <img src={bedIcon} alt='' />
                        <p>3</p>
                    </div>
                    <div className='icon'>
                        <img src={toiletIcon} alt='' />
                        <p>2</p>
                    </div>

                </div>
                <div className='info_price'>
                    <span>330.000€</span>
                </div>
                <div className='info_button'>
                    <Link to='/details'>
                        <img src={moreInfo} alt='' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card