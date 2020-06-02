import React from 'react';

export default () => {
    const name = 'Marry';
    const surname = 'Poppins';
    return (
        <div>
            <h2>Show block</h2>
            <div>
                <label>
                    <input value={name} />
                </label>
                <label>
                    <input value={surname} />
                </label>
            </div>
        </div>
    );
};
