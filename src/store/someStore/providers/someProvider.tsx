import React, {useReducer} from 'react';

import {someReducer} from "../reducer/someReducer";
import {someInitialState} from "../constants/someInitialState";
import {SomeContext} from "../context/someContext";

export const SomeProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(someReducer, someInitialState);
    const value = {state, dispatch};

    return <SomeContext.Provider value={value}>{children}</SomeContext.Provider>;
};
