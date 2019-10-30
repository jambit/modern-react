import React, { createContext, useContext } from 'react';

export const MyContext = createContext('defaultValue');

export default () => {
    const context = useContext(MyContext);
    return <div>Context: {context}</div>;
}
