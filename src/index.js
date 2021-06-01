import React from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';

const sesion = true;

const App = () => {
    return (
        <>
            {sesion === true ? <Usuario /> : <p>No Has Iniciado Sesion</p>}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));