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
                    <label><input value={name} onChange={onChangeName} /></label>
                    <label><input value={surname} onChange={onChangeSurname} /></label>
                    <Effectful />
                </div>
            )}
        </div>
    );
}
