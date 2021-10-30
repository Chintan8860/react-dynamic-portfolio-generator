import React, { createContext, useState} from "react";
const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
    const [portfolioFiles, setPortFolioFiles] = useState();
    return (
        <PortfolioContext.Provider value={[portfolioFiles, setPortFolioFiles]}>
            {children}
        </PortfolioContext.Provider>
    );
};

export default PortfolioProvider;