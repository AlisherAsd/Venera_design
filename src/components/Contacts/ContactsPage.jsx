import React, { useState } from 'react';
import './ContactsPage.css'
import SimpleMap from '../UI/Map/Map'
import Line from '../UI/Line/Line';
import { sendMessage } from '../../api/tg';

const ContactsPage = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [text, setText] = useState('')

    async function SendText() {
        const message = `Имя: ${name}, Номер: ${number}, Услуга: ${text}`

        await sendMessage(message)
    } 

    return (
        <div className='ContactsPage_Container'>
            <div className='Header-logo-2'>
                <p>Email, phone, map...</p>
                <h2>Наши контакты</h2>
            </div>

           <div className='Contacts-BG'>
                <img src={require('../../IMG/BG_contacts.jpg')} />
           </div>
           
           <Line />

            < div className='submit-form'> 

                <div className='submit-pole'>
                    <h3 style={{color: 'black'}}>Отправьте заявку</h3>
                    <p>
                    <label>Имя</label>
                    </p>
                    < input 
                        onChange={e => setName(e.target.value)}
                        placeholder='Введите ваше имя'
                        type = 'text'
                        name = 'username' required
                    />
                    
                </div>
                <div className='submit-pole'>
                    <p>
                    <label>Номер телефона</label>
                    </p>
                    <input 
                        onChange={e => setNumber(e.target.value)}
                        type='text' 
                        placeholder='Введите ваш номер'
                        name='usernumber' required 
                    />
                </div>
                <div className='submit-pole'>
                    <p>
                    <label>Сообщение</label>
                    </p>
                    <input 
                        onChange={e => setText(e.target.value)}
                        type='text' 
                        placeholder='Опишите услугу'
                        name='question'
                    />
                </div>
			    <button onClick={SendText}>Послать заявку</button>
		    </div>

            <Line />

            <div className='Header-logo-2'>
                <p>Email, phone, map...</p>
                <h2>Наши данные</h2>
                <div className='em-ph-mp'>
                    <p>
                        <img src={require("../../IMG/email.png")} />
                        <a href='mailto:main@main.com'>main@main.com</a>
                    </p>
                    <p>
                        <img src={require("../../IMG/telephone-number.png")} />
                        <a href='tel:8-900-800-70-60'>8-900-800-70-60</a>
                    </p>
                    <p><a href=''>г.Уфа ул. Ашкадарская 21</a></p>
                </div>
            </div>

            <div className='Map'>
                <SimpleMap />
            </div>
            <p style={{padding: 60, textAlign: 'center'}}>© 2018 • interview Venera</p>
        </div>
    );
};

export default ContactsPage;