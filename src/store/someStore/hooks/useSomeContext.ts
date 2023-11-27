import {useContext} from 'react';

import {SomeContext} from "../context/someContext";

export const useSomeContext = () => {
    const context = useContext(SomeContext);

    if (context === undefined) {
        throw new Error('useSomeContext must be used within an SomeProvider');
    }

    return context;
};
