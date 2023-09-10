import { createContext, useReducer } from "react";
import GlobelReducer from './GlobelReducer';

const GlobelContext = createContext();

export const GlobelProvider = ({ children }) => {
    const initialState = {
        quote: {
            name : 'this is name'
        },
      
    };

    const [state, dispatch] = useReducer(GlobelReducer, initialState);

    const getData = async () => {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        dispatch({
            type: 'GET_DATA',
            payload: data,

        });
    };

    return (
        <GlobelContext.Provider
            value={{
                ...state,
                getData,
            }}
        >
            {children}
        </GlobelContext.Provider>
    );
};

export default GlobelContext;
