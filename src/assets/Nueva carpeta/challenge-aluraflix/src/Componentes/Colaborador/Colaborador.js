import './Colaborador.css'
import ModalEditar from '../ModalEditar/ModalEditar'

const Colaborador = (props) => {
    return <div className="card col-3">
        <div className='imagen' style={{border: `5px solid ${props.colorPrimario}`, boxShadow: `0px 0px 17px 8px ${props.colorPrimario} inset`}}>
            <img src={props.datos.imagen} className="card-img-top" alt="imagenColaborador"></img>
        </div>
        <div className="card-body" style={{border: `5px solid ${props.colorPrimario}`, boxShadow: `0px 0px 17px 4px ${props.colorPrimario} inset`}}>
            <button className="btn btn-primary" onClick={() => props.eliminarVideo(props.datos.id)}>Eliminar</button>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modalEditar${props.datos.id}`}>Editar</button>
        </div>
        <ModalEditar id={`modalEditar${props.datos.id}`} video={props.datos} categorias={props.categorias} actualizarVideo={props.actualizarVideo}/>
    </div>
}

export default Colaborador