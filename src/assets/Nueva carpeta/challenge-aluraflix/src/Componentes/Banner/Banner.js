import './Banner.css'

function Banner() {
    return <section className="banner">
        <div className='row'>
            <div className='col-md-5 col-8 divTexto'>
                <h3 className='display-3'>Challenge React</h3>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div className='col-md-6 divVideo'>
            <iframe width='80%' height='400px' src="https://www.youtube.com/embed/ov7vA5HFe6w?si=wK0YRlLNy1_ILdhI" title="YouTube video player"></iframe>
            </div>
        </div>
    </section>
}

export default Banner