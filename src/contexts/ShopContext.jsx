import React, { createContext } from 'react';
import allData from '../components/Assets/all_product'


export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {
    const contextValue = {allData};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;