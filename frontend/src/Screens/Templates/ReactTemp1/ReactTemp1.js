import React,{useState} from 'react'
import PortfolioLeftCard from '../../../components/PortfolioLeftCard'
import PortfolioRightCard from '../../../components/PortfolioRightCard'
import FooterPortfolio from '../../../components/FooterPortfolio';

import './ReactTemp1.css'

const ReactTemp1 = (props) => {
    // example for make final data

    // user dummy data
    const userDummyData = {
        username: 'Chintan bambharoliya',
        jobTitle: 'Designer',
        address: 'London, UK',
        email: 'ex@mail.com',
        phone: '1224435534',
        profileImage: "data:image/jpeg;base64,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",
        skills: [
            {
                name: 'Adobe Photoshop',
                percentage: 90,
            },
            {
                name: 'Photography',
                percentage: 80,
            },
            {
                name: 'Illustrator',
                percentage:75,
            },
            {
                name: 'Media',
                percentage: 50,
            },
        ],
        experience: [
            {
                jobTitle: 'Fullstack Developer / google',
                startDate: 'Sep 2022',
                endDate: '',
                currentStatus: true,
                foreverStatus: false,
                description: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
            },
            {
                jobTitle: 'Fullstack Developer / lanetteam.com',
                startDate: 'Jan 2021',
                endDate: 'Sep 2022',
                currentStatus: false,
                foreverStatus: false,
                description: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
            }
        ],
        education: [
            {
                eduTitle: 'B.Tech IT / utu.ac.in',
                startDate: 'Jun 2017',
                endDate: 'July 2021',
                currentStatus: false,
                foreverStatus: false,
                description: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
            },
            {
                eduTitle: 'HSC / GSEB',
                startDate: 'Jun 2015',
                endDate: 'May 2017',
                currentStatus: false,
                foreverStatus: false,
                description: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
            }
        ]
    }

    // now convert userData object to portfolio data Object
    
    const portfolioDummyData = {
        leftCardData : {
            profileImage: userDummyData.profileImage,
            username: userDummyData.username,
            titleIconClass:"fa fa-certificate fa-fw",
            userPersonalDetails: [
                {
                    iconClass: "fa fa-briefcase fa-fw",
                    info:userDummyData.jobTitle
                },
                {
                    iconClass: "fa fa-home fa-fw",
                    info: userDummyData.address
                },
                {
                    iconClass: "fa fa-envelope fa-fw",
                    info: userDummyData.email
                },
                {
                    iconClass: "fa fa-phone fa-fw",
                    info: userDummyData.phone
                },
            ],
            skills: userDummyData.skills
        },
        rightCardData: [
            {
                subTitleIcon: "fa fa-suitcase fa-fw",
                dateIconClass: "fa fa-calendar fa-fw",
                detailsTitle: "Work Experience",
                data: [...userDummyData.experience.map(x => {
                    const data = {
                        subTitle: x.jobTitle,
                        startDate: x.startDate,
                        endDate: x.endDate,
                        current: x.currentStatus,
                        forever: x.foreverStatus,
                        details: x.description,
                    }
                    return data
                })]
            },
            {
                subTitleIcon: "fa fa-certificate fa-fw",
                dateIconClass: "fa fa-calendar fa-fw",
                detailsTitle: "Education",
                data: [...userDummyData.education.map(x => {
                    const data = {
                        subTitle: x.eduTitle,
                        startDate: x.startDate,
                        endDate: x.endDate,
                        current: x.currentStatus,
                        forever: x.foreverStatus,
                        details: x.description,
                    }
                    return data
                })]
            }
        ]
    }

    const [portfolioData] = useState(portfolioDummyData)
    console.log("dummy", portfolioData)
    return (
        <>
        <div className="w3-content w3-margin-top" style={{maxWidth:"1400px"}}>
            <div className="w3-row-padding">
                <PortfolioLeftCard leftCardData={portfolioData.leftCardData}/>
                <PortfolioRightCard rightCardData={portfolioData.rightCardData}/>
            </div>
            </div>
            <FooterPortfolio />
            </>
    )
}

export default ReactTemp1;
