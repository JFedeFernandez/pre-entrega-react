import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <div className='navBar'>
            <img className='logo-celestina' src="../src/assets/logo.webp" alt="Logo La celestina"/>
            <ul className='listaDesordenada'>
                <li className='itemList'>
                    <a className='anclas' href="#"><i className='fa-solid fa-house'></i>Inicio</a>
                </li>
                <li className='itemList'>
                    <a className='anclas' href="#"><i className='fa-regular fa-image'></i>Fotos</a>
                </li>
                <li className='itemList'>
                    <a className='anclas' href="#"><i className='fa-solid fa-box'></i>Productos</a>
                </li>
                <li className='itemList'>
                    <a className='anclas' href="#"><i className='fa-solid fa-circle-info'></i>Nosotros</a>
                </li>
                <li className='itemList'>
                    <a className='anclas' href="#"><i className='fa-regular fa-envelope'></i>Contacto</a>
                </li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar
