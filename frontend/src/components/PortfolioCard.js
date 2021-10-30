import React, { useState} from 'react'
import SubTitle from './SubTitle';
import DetailsTitle from './DetailsTitle';
import DateTitle from './DateTitle';

const PortfolioCard = ( props) => {
    const [cardData] = useState(props.data);

    return (
        <div className="w3-container w3-card w3-white w3-margin-bottom">
            <DetailsTitle iconClass={cardData.subTitleIcon} title={cardData.detailsTitle} />
            {cardData.data && cardData.data.map((x,i) => (
                <div className="w3-container" key={i}>
                    <SubTitle title={x.subTitle} type="bold" />
                    <DateTitle start={x.startDate} end={x.endDate} current={x.current} forever={x.forever} iconClass={cardData.dateIconClass} />
                    <SubTitle title={x.details} />
                    {i !== (cardData.data.length - 1) && <hr />}
                </div>
            ))}
           

        </div>
    )
}
export default PortfolioCard;
