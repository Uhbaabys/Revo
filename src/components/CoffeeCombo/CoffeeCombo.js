import React from "react";
import './CoffeeCombo.scss'
import CoffeeComboItem from "./CoffeeComboItem/CoffeeComboItem";
import ContentHeader from "../ContentBlock/ContentHeader";

const CoffeeCombo = () => {
    return(
        <div>
            <ContentHeader h2 = 'COFFEE COMBO' h3 = 'Your Personalized Coffee'/>
            <CoffeeComboItem />
        </div>
    )
}

export default CoffeeCombo;