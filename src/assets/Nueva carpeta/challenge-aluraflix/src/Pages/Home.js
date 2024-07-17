import Banner from '../Componentes/Banner/Banner'
import Categoria from '../Componentes/Categoria/Categoria'

const Home = (props) => {
    return <>
        <Banner></Banner>
        {
            props.categorias.map((categoria) => <Categoria key={categoria.id} categoria={categoria}
                colaboradores={props.colaboradores.filter(colaborador => colaborador.categoria === categoria.titulo)}
                eliminarVideo={props.eliminarVideo} actualizarVideo={props.actualizarVideo} categorias={props.categorias}
            />
            )
        }
    </>
}

export default Home