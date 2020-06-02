import React from 'react';

export default () => {
    const a = 0;
    const b = 0;
    const sum = 0;
    return (
        <div>
            <input value={a} />
            +
            <input value={b} />
            {`= ${sum}`}
            <button>Send</button>
        </div>
    );
};
