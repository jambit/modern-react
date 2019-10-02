import React from 'react';
import './style.scss';
import data from './data.yml';
import avatar from './avatar.png';

const typedData: { list: string[] } = data;

export default () => (
    <div className="app-container">
        <h1><img src={avatar} alt="Avatar"/> Hello 3</h1>
        <ul>
            {typedData.list.map(s => <li key={s}>{s}</li>)}
        </ul>
    </div>
);
