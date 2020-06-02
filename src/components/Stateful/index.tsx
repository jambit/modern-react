import React from 'react';
import Effectful from '../Effectful';
import useToggle from '../../hooks/useToggle';
import useInput from '../../hooks/useInput';

export default () => {
    const [open, toggleOpen] = useToggle(true);
    const [name, onChangeName] = useInput('Mary');
    const [surname, onChangeSurname] = useInput('Poppins');
    return (
        <div>
            <h2 onClick={toggleOpen}>{open ? 'Hide block' : 'Show block'}</h2>
            {open && (
                <div>
                    <input value={name} onChange={onChangeName} />
                    <input value={surname} onChange={onChangeSurname} />
                    <Effectful />
                </div>
            )}
        </div>
    );
};
