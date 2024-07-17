import "./FormularioVideo.css"
import Input from '../Input/Input'
import ListaOpciones from '../ListaOpciones/ListaOpciones'

import { useState } from "react"
import Boton from "../Boton/Boton"

const FormularioVideo = (props) => {

    const [Titulo, actualizarTitulo] = useState("")
    const [Categoria, actualizarCategoria] = useState("FRONT END")
    const [Imagen, actualizarImagen] = useState("")
    const [Video, actualizarVideo] = useState("")
    const [Descripcion, actualizarDescripcion] = useState("")

    const {registrarColaborador} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosEnviar = {
            titulo: Titulo,
            categoria: Categoria,   
            imagen: Imagen,
            video: Video,
            Descripcion: Descripcion
        }
        registrarColaborador(datosEnviar)
    }

    return <section className="formulario m-5">
        <form onSubmit={manejarEnvio}>
            <h1 className="text-center">Nuevo Video</h1>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
            <Input placeholder={"Ingrese el Titulo"} required={true} titulo={"Titulo"} valor={Titulo} actualizarValor={actualizarTitulo}></Input>    
            <ListaOpciones categorias = {props.categorias} actualizarCategoria={actualizarCategoria}></ListaOpciones>
            <Input placeholder={"El enlace es obligatorio"} required={true} titulo={"Imagen"} valor={Imagen} actualizarValor={actualizarImagen}></Input>
            <Input placeholder={"Ingrese el enlace del video"} required={true} titulo={"Video"} valor={Video} actualizarValor={actualizarVideo}></Input>
            <Input placeholder={"Ingrese el Nombre"} required={true} titulo={"Descripcion"} valor={Descripcion} actualizarValor={actualizarDescripcion}></Input>
            <Boton></Boton>
        </form>
    </section>
}

export default FormularioVideo;