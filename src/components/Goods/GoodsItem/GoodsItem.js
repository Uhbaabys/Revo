import React from "react";
import './GoodsItem.scss';
import BuyButton from "../../Buttons/BuyButton/BuyButton";
import DetailButton from "../../Buttons/DetailButton/DetailButton";

const GoodsItem = (props) => {
    return(
        <div className={'goods-item-container'}>
            <img src={props.image} alt=""/>
            <div className={'discription'}>
                <h3>{props.price}</h3>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <div className={'div'}>
                    <BuyButton />
                    <DetailButton />
                </div>
            </div>
        </div>
    )
}

export default GoodsItem;