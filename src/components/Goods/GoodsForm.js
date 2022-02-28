import React from "react";
import './GoodsForm.scss';
import ContentHeader from "../ContentBlock/ContentHeader";
import GoodsItem from "./GoodsItem/GoodsItem";
import img_morning from './img/Morning.png'
import img_everyday from './img/Everyday.png'
import img_origin from './img/Origin.png'
import img_bold from './img/Bold.png'

const GoodsForm = () => {

    return (
        <div className={'goods-form'}>
            <ContentHeader h2 = 'STANDARD GUARANTEE' h3 = 'Choose Your Favorite' />
            <div className={'goods-container'}>
                <GoodsItem image = {img_morning} price = '$99.00' title = 'REVO Morning' text = 'Bitter, sweet aftertaste, floral scent' />
                <GoodsItem image = {img_everyday} price = '$85.00' title = 'REVO Everyday' text = 'Balance, bitter aftertaste, chocolate taste' />
                <GoodsItem image = {img_origin} price = '$139.00' title = 'REVO Origin' text = 'Sweet aftertaste, less bitter, strawberry sour taste' />
                <GoodsItem image = {img_bold} price = '$75.00' title = 'REVO Bold' text = 'Bold, bitter, traditional' />
            </div>
            <div className={'goods-form-back'}></div>
        </div>
    )

}
export default GoodsForm;