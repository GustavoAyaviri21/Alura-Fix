import Colaborador from "../Colaborador/Colaborador"
import "./Categoria.css"


const Categoria = (props) =>{
    const { colorPrimario, titulo} = props.categoria
    const {colaboradores} = props

    return <section className="categoria">
        <h3 className="text-center" style={{background: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores d-flex justify-content-center gap-5 row">
            {
                colaboradores.map((colaborador) => (<Colaborador key={colaborador.id} colorPrimario={colorPrimario} datos = {colaborador} eliminarVideo={props.eliminarVideo} actualizarVideo={props.actualizarVideo} categorias={props.categorias}></Colaborador>))
            }
        </div>
    </section>
}

export default Categoria