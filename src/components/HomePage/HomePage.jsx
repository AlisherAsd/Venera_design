import React, { useState } from 'react';
import './HomePage.css'
import { NavLink } from 'react-router-dom';
import MyModal from '../UI/Modal/MyModal';
import { portfolio_home, uslugi } from '../../store/db'
import MyCarousel from '../UI/Carousel/Carousel';
import Line from '../UI/Line/Line'

const HomePage = () => {

    const [modalActive, setModalActive] = useState(false)
    const [modalPath, setModalPath] = useState('Наши_услуги.webp')

    function ModalView(img_path) {
        setModalActive(true)
        setModalPath(img_path)
    }



    return (
        <div className='HomePage_Container'>
            <div className='Header-title'>
                <h1>Transform Your</h1>
                <h1>Space with Archies</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='Header-logo-Home'>
               
            </div>
            <div className='Header-opis'>
                <h3 style={{color: "white"}}>Title Two Yeah</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero obcaecati quasi aperiam.</p>

            </div>
            <Line />
            <div className='Header-opis-2'>
                <h2>Наши услуги</h2>
                <h3>Выберите интересующее вас направление</h3>
            </div>

            <MyModal 
                Active={modalActive} 
                setActive={setModalActive}
                img_path={modalPath}
            />

            <div className='uslugi'>
                {
                    uslugi.map(el => {
                        return (
                            <>
                                <img 
                                key={el.id}
                                onClick={() => 
                                ModalView(el.img)}
                                src={require('../../IMG/' + el.img)}
                                style={{width: '40%', maxWidth: 250, borderRadius: 30, padding: 10}}
                                />
                            </>
                        )
                    })
                }
               
            </div>
            <Line />
            <div className='Header-opis-2'>
                <h2>Портфолио</h2>
                <h3>Наши работы</h3>
            </div>
            <div className='port-home'>
              
                {
                    portfolio_home.map(el => {
                        return (
                            <>
                                <img 
                                key={el.id}
                                onClick={() => 
                                ModalView(el.img)}
                                src={require('../../IMG/' + el.img)}
                              
                                />
                            </>
                        )
                    })
                }
                <div className='link-to-portfolio'>
                    <p>
                        <NavLink to={'/portfolio'}
                            style={{color: 'black', textDecoration: 'none', fontSize: 25}}
                        >Показать все работы</NavLink>
                    </p>
                    <img style={{height: 30, width: 30, borderRadius: 0}} src={require('../../IMG/ssulka.png')} />
                </div>
                <div>
                    <MyCarousel />
                </div>
                <p style={{padding: 60}}>© 2018 • interview Venera</p>
            </div>
        </div>
    );
};

export default HomePage;