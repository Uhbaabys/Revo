import React from "react";
import './GiftsetTabsButton.scss'

const GiftsetTabsButton = (props) => {
    return(
            <button className={'giftset-tabs-button'}>{props.text}</button>
    )
}

export default GiftsetTabsButton;