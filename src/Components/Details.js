import React from 'react'
import carrousel from '../images/carrousel.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import sizeIcon from '../images/sizeIcon.svg'
import bedIcon from '../images/bedIcon.svg'
import toiletIcon from '../images/toiletIcon.svg'
import heart from '../images/heart.svg'
import location from '../images/location.png'
import controllers from '../images/controllers.png'
import arrow from '../images/arrow.svg'
import Card from './Card'
import { Link } from 'react-router-dom';



function Details() {

    return (
        <div className='details_container'>
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation
                effect
                speed={800}
                slidesPerView={1}
                loop
                className='swiper_slider'
            >
                <SwiperSlide className='swiper'>
                    <img src={carrousel} alt='' />
                </SwiperSlide>

            </Swiper>


            <div className='details_name'>
                <h2>Ático Dúplex de Obra Nueva <br></br></h2>
                <p>Marianao, Sant Boi de Llobregat</p>
                <span>Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada
                    al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las
                    habitaciones dobles y uno de los cuartos. de baño de tres piezas..
                    Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada
                    al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las
                    habitaciones dobles y uno de los cuartos. de baño de tres piezas..
                    Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada
                    al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las
                    habitaciones dobles y uno de los cuartos. de baño de tres piezas</span>
            </div>

            <div className='details_info'>
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
                    <img src={heart} alt='' />
                </div>

            </div>
            <div className='details_specs'>
                <div className='spec_info'>
                    <h2>Caracteristicas</h2>
                    <p>Ático102 m2 (construidos)<br />
                        3 Habitaciones <br />
                        Segunda mano100 m2 (útiles) <br />
                        Reformado <br />
                        2 Baños</p>
                </div>
                <div className='spec_info'>
                    <h2>Extras</h2>
                    <p>Terraza <br />
                        Balcón <br />
                        Ascensor <br />
                        Calefacción <br />
                        Aire acondicionado</p>
                </div>
            </div>
            <div className='details_location'>
                <img src={location} alt='' />
            </div>
            <div className='details_controllers'>
                <h2>Avísame si baja</h2>
                <img src={controllers} alt='' />
            </div>
            <div className='details_subtitle'>
                <h2>También pueden interesarte</h2>
            </div>

            <div className='related'>
                <Card />
                <Card />
            </div>
            <div className='arrow'>
                <Link to='/'>
                    <img src={arrow} alt='' />
                </Link>

            </div>
        </div>

    )
}

export default Details