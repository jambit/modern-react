import React from 'react';
import Stateful from '../Stateful';
import NotRedux from '../NotRedux';
import Contextual, { MyContext } from '../Contextual';

export default () => (
    <div>
        <Stateful />
        <NotRedux />
        <MyContext.Provider value="someOtherValue">
            <Contextual />
        </MyContext.Provider>
    </div>
);
