import React from 'react';
import { Titulo } from './Titulo';

const Usuario = () => {

    const pais = null;
    const amigos = ['Alejandro', 'Manuel', 'Cesar'];

    return (
        <div>
            <Titulo usuario="Cesar" color="blue" />
            <Titulo usuario="Manuel" color="red" />
            <p>Que tengas un buen dia.</p>
            {pais && <p>Tu eres de: {pais}</p>}
            <ul>
                {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
            </ul>
        </div>
    );
};

export default Usuario;