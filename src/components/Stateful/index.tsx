import React, { useState } from 'react';
import Effectful from '../Effectful';
import useToggle from '../../hooks/useToggle';

export default () => {
    const [open, toggleOpen] = useToggle(true);
    const [name, setName] = useState('Mary');
    const [surname, setSurname] = useState('Poppins');
    return (
        <div>
            <h2 onClick={toggleOpen}>{open ? 'Hide block' : 'Show block'}</h2>
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
