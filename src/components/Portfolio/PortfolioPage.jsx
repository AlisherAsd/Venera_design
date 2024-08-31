import React, { useState } from 'react';
import './PortfolioPage.css'
import MyModal from '../UI/Modal/MyModal';
import { portfolio } from '../../store/db'
import Line from '../UI/Line/Line';

const PortfolioPage = () => {

    const [modalActive, setModalActive] = useState(false)
    const [modalPath, setModalPath] = useState('Портфолио.jpg')
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')

    function ModalView(img_path, text, Title) {
        setModalActive(true)
        setModalPath(img_path)
        setText(text)
        setTitle(Title)
    }


    return (
        <div className='PortfolioPage_container'>
            <div className='Header-logo'>
                <h2>Портфолио</h2>
                <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. </a>
            </div>

            <Line />

            <div className='statistic'>
                <h4>Наши достижения...</h4>
                <div className='statistic-line'>
                    [20+ заказов]
                    [5 лет на рынке]
                    [Отличные отзывы]
                </div>
            </div>

            <MyModal 
                Active={modalActive} 
                setActive={setModalActive}
                img_path={modalPath}
                text={text}
                title={title}
            />

            <div className='lists-works'>
            {
                    portfolio.map(el => {
                        return (
                            <div className='cards' key={el.id}>
                                <img 
                                    onClick={() => 
                                    ModalView(el.img, el.body, el.title)}
                                    src={require('../../IMG/' + el.img)}
                                />
                                <h2>{el.title}</h2>
                                <p>{el.body}</p>
                            </div>
                        )
                    })
                }
            </div>
            <p style={{padding: 60, textAlign: 'center'}}>© 2018 • interview Venera</p>
        </div>
    );
};

export default PortfolioPage;