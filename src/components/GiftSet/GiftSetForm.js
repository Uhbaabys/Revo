import React from "react";
import './GiftSetForm.scss';
import ContentHeader from "../ContentBlock/ContentHeader";
import img_product from "./img/product.png";
import img_coffee from "./img/coffee.png"
import img_mountains from "./img/mountains.png"
import GiftsetTabsButton from "./GiftsetTabsButton/GiftsetTabsButton";
import BuyButton from "../Buttons/BuyButton/BuyButton";
import DetailButton from "../Buttons/DetailButton/DetailButton";
import {
    GIFTSET_ONE_PRICE, GIFTSET_TWO_PRICE, GIFTSET_THREE_PRICE,
    GIFTSET_ONE_TITLE, GIFTSET_TWO_TITLE, GIFTSET_THREE_TITLE,
    GIFTSET_ONE_DISCRIPTION, GIFTSET_TWO_DISCRIPTION, GIFTSET_THREE_DISCRIPTION
} from "../constance";

const GiftSetForm = () => {

    return (
        <div className={'giftset-form'}>
            <ContentHeader h2 = 'GIFTSET' h3 = 'Best Gift For Best Friend'/>
            <div className={'giftset-container'}>
                <div className={'giftset-image'}>
                    <img src={img_product} alt=""/>
                </div>
                <div className={'giftset-middle-block'}>
                    <div className={'giftset-content'}>
                        <h3>{GIFTSET_ONE_PRICE}</h3>
                        <h2>{GIFTSET_ONE_TITLE}</h2>
                        <p>{GIFTSET_ONE_DISCRIPTION}</p>
                        <div className={'giftset-content-information'}>
                            <div>
                                <img src={img_coffee} alt=""/>
                                <ul>
                                    <li>Kind of nut</li>
                                    <li>Fine Robusta Blend</li>
                                </ul>
                            </div>
                            <div>
                                <img src={img_mountains} alt=""/>
                                <ul>
                                    <li>Height</li>
                                    <li>700 - 800m</li>
                                </ul>
                            </div>
                        </div>
                        <div className={'giftset-buttons-block'}>
                            <BuyButton />
                            <DetailButton />
                        </div>
                    </div>
                </div>
                <div className={'giftset-tabs'}>
                    <GiftsetTabsButton text = '1'/>
                    <GiftsetTabsButton text = '2'/>
                    <GiftsetTabsButton text = '3'/>
                </div>
            </div>
        </div>
    )

}
export default GiftSetForm;