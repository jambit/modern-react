import React from 'react';
import './style.scss';
import data from '../../data.yml';
import kitten from '../../kitten.jpg';

const typedData: { list: string[] } = data;

export default () => (
    <div className="app-container">
        <h1>Hello World</h1>
        <ul>
            {typedData.list.map((s) => (
                <li key={s}>{s}</li>
            ))}
        </ul>
        <img src={kitten} alt="Sooo Cute!" />
    </div>
);
