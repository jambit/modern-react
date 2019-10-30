import React, { useState, useMemo } from 'react';

export default () => {
    const [a, setA] = useState('0');
    const [b, setB] = useState('0');
    const sum = useMemo(() => parseFloat(a) + parseFloat(b), [a, b]);
    return (
        <div>
            <input onChange={(e) => setA(e.target.value)} value={a} />
            +
            <input onChange={(e) => setB(e.target.value)} value={b} />
            =
            {sum}
        </div>
    );
}
