import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    const manejarCambio = (e) => {
        props.actualizarCategoria(e.target.value)
    }

    return <div className="inputContainer m-4">
        <label>Categorias</label>
        <select value={props.valor} onChange={manejarCambio}>
            {props.categorias.map((categoria, index) => <option key={index} value={categoria.titulo}>{categoria.titulo}</option>)}
        </select>
    </div>
}

export default ListaOpciones