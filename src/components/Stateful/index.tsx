import React, { useState } from 'react';
import Effectful from '../Effectful';

export default () => {
    const [open, setOpen] = useState(true);
    const [name, setName] = useState('Mary');
    const [surname, setSurname] = useState('Poppins');
    return (
        <div>
            <h2 onClick={() => setOpen(!open)}>{open ? 'Hide block' : 'Show block'}</h2>
            {open && (
                <div>
                    <label><input value={name} onChange={(e) => setName(e.target.value)} /></label>
                    <label><input value={surname} onChange={(e) => setSurname(e.target.value)} /></label>
                    <Effectful />
                </div>
            )}
        </div>
    );
}
