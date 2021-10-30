import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioRightCard = ({rightCardData}) => {

    return (
        <div className="w3-twothird">
            {rightCardData && rightCardData.length > 0 && rightCardData.map((data, i) => (
                <PortfolioCard key={i} data={data} />
            ))}
        </div>
    )
}

export default PortfolioRightCard
