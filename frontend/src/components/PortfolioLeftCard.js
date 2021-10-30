import React, { useState } from 'react'
import UserImage from './UserImage';
import SkillProgressBar from './SkillProgressBar';
import UserName from './UserName';
import UserInfo from './UserInfo';
import DetailsTitle from './DetailsTitle';
import SubTitle from './SubTitle';

const PortfolioLeftCard = (props) => {
    const [data] = useState(props.leftCardData);
    console.log("data", data);
    return (
        <div className="w3-third">

            <div className="w3-white w3-text-grey w3-card-4 MainCss">
                <div className="w3-display-container">
                    <UserImage src={data.profileImage} />
                    <div className="w3-display-bottomleft w3-container w3-text-black">
                        <UserName username={data.username} />
                    </div>
                </div>
                <div className="w3-container">
                    {
                        data.userPersonalDetails && data.userPersonalDetails.map((detail, i) => (
                            <UserInfo key={i} iconClass={detail.iconClass} info={detail.info} />
                        ))
                    }
                    <hr />
                    <DetailsTitle iconClass={data.titleIconClass} title="Skills" />
                    {data.skills && data.skills.map((skill, i) => (
                        <React.Fragment key={i}>
                            <SubTitle title={skill.name} />
                            <SkillProgressBar percentage={skill.percentage} />
                            <br />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <br />
        </div>
    )
}

export default PortfolioLeftCard;
