import React, { useEffect, useState } from 'react';

export default () => {
    const [originalTitle] = useState(document.title);
    const [value, setValue] = useState(false);
    useEffect(() => {
        const element = document.getElementById('effect');
        element.textContent = new Date().toISOString();
    }, [value]);
    useEffect(() => {
        document.title = 'Effectful React';
        return () => document.title = originalTitle;
    }, []);
    return (
        <span>
            <span id="effect">Some Effect</span>
            <button onClick={() => setValue(!value)}>{value ? 'Foo' : 'Bar'}</button>
        </span>
    );
}
