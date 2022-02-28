import React from 'react'
import './Header.scss'
import img_header from './img/header.png'
import img_play from './img/play.png'

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'left_block'}>
                <div className={'left_text'}>
                    <div>your</div>
                    <div className={'golden'}>personalized</div>
                    <div>coffee</div>
                </div>
            </div>
            <div className={'picture'}>
                <img src = {img_header} alt =''/>
                <div className={'opacity'}></div>
                <div className={'play'}>
                    <img src={img_play} alt=""/>
                </div>
            </div>
            <div className={'menu'}>
                <a href='#'><div className={'basket'}></div></a>
                <div className={'nav'}>
                    <a href='#'>HOME PAGE</a>
                    <a href='#'>COFFEE</a>
                    <a href='#'>COLOR FILTER</a>
                    <a href='#'>COFFEE COMBO</a>
                    <a href='#'>GIFTSET</a>
                    <a href='#'>CONTACT</a>
                </div>
            </div>
        </header>)
}

export default Header;