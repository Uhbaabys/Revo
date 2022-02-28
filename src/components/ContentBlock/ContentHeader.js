import React from "react";
import './ContentHeader.scss';

const ContentHeader = (props) => {

    return (
        <div className={'title'}>
            <h3>{props.h3}</h3>
            <h2>{props.h2}</h2>
        </div>

    )

}
export default ContentHeader;