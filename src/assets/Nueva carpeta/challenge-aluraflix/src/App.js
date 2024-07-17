import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/FormularioVideo/FormularioVideo';
import { buscar, post, borrar, actualizar } from './Api/Api';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './Componentes/Footer/Footer';

function App() {
  const [categorias] = useState([
    {
      id: "1",
      titulo: "FRONT END",
      colorPrimario: "#6BD1FF",
    },
    {
      id: "2",
      titulo: "BACK END",
      colorPrimario: "#00C86F",
    },
    {
      id: "3",
      titulo: "INNOVACION Y GESTION",
      colorPrimario: "#FFBA05",
    }
  ])

  const [colaboradores, actualizarColaboradores] = useState([])

  const registrarColaborador = async (colaborador) => {
    await actualizarColaboradores([...colaboradores, colaborador])
    post("/Video", colaborador)
  }

  useEffect(() => {
    buscar("/Video", actualizarColaboradores)
  }, [])

  const eliminarVideo = async (id) => {
    const nuevosVideos = colaboradores.filter((colaborador) => colaborador.id !== id)
    await actualizarColaboradores(nuevosVideos);
    borrar("/Video", id);
  }

  const actualizarVideo = async (video) => {
    actualizar(`/Video/${video.id}`, video);
    const nuevosVideos = colaboradores.map((colaborador) => colaborador.id === video.id ? video : colaborador);
    actualizarColaboradores(nuevosVideos);
  }

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home categorias={categorias} colaboradores={colaboradores} eliminarVideo={eliminarVideo} actualizarVideo={actualizarVideo}></Home>}></Route>
        <Route path='/NuevoVideo' element={<Formulario categorias={categorias} registrarColaborador={registrarColaborador}></Formulario>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
