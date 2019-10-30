import React from 'react';
import Stateful from '../Stateful';
import NotRedux from '../NotRedux';
import Contextual, { MyContext } from '../Contextual';
import Memoization from '../Memoization';
import Reference from '../Reference';

export default () => (
    <div>
        <Stateful />
        <NotRedux />
        <MyContext.Provider value="someOtherValue">
            <Contextual />
        </MyContext.Provider>
        <Memoization />
        <Reference />
    </div>
);
