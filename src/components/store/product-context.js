import React, { useState } from "react";

export const FunctionalContext = React.createContext();



const FunctionalProvider = ({ children }) => {

    const [state, setState] = useState(
        {
            items: [],
            totalAmount: 0
        }
    )

    return (
        <FunctionalContext.Provider>
            {children}
        </FunctionalContext.Provider>
    )

}

export default FunctionalProvider;