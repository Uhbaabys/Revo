import React from "react";
import './CoffeeBuildItem.scss'

const CoffeeBuildItem = (props) => {

    return(
        <div className={'coffee-build-items'}>
            <img src = {props.image} className={'coffee-build-items-image'} alt=""/>
            <h2 className={'coffee-build-items-title'}>{props.title}</h2>
            <p className={'coffee-build-items-text'}>{props.text}</p>
        </div>
    )
}

export default CoffeeBuildItem;