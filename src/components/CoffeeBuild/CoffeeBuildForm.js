import React from "react";
import ContentHeader from "../ContentBlock/ContentHeader";
import "./CoffeeBuildForm.scss"
import CoffeeBuildItem from "./CoffeeBuildItem/CoffeeBuildItem";
import img_source from './img/Source.png'
import img_quality from './img/Quality.png'
import img_preparation from './img/Preparation.png'
import img_nuts from './img/Nuts.png'

const CoffeeBuildForm = (props) => {

    return (
        <div className={'coffee-build-form'}>
            <ContentHeader h2 ='COFFEE BUILD YOUR BASE' h3 = 'Your Personalized Coffee'/>
            <div className={'coffee-build-container'}>
                <CoffeeBuildItem image= {img_source} title = 'Source' text = 'Arabica and Robusta coffee beans meet international standards.'/>
                <CoffeeBuildItem image= {img_quality} title = 'Quality' text = 'Each coffee bean is a highly concentrated process of coffee artisans.'/>
                <CoffeeBuildItem image= {img_nuts} title = 'Nuts' text = '70% of the quality of a cup of coffee comes from the origin and quality of the green bean.'/>
                <CoffeeBuildItem image= {img_preparation} title = 'Preparation' text = 'The coffee beans are molted through a thorough and rigorous roasting process.'/>
            </div>
        </div>

    )

}
export default CoffeeBuildForm;