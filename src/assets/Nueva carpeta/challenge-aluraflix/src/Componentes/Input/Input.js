import { useState } from 'react';
import './Input.css'

const Input = (props) => {
    const [valor, actualizarValor] = useState();

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return <div className="inputContainer m-4">
        <label>{props.titulo}</label>
        <input type={props.type} placeholder={props.placeholder} required={props.required} value={valor} onChange={manejarCambio}></input>
    </div>
}

export default Input;