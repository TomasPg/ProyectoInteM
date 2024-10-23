
import { Carousel } from 'react-bootstrap';
import "./Gastos.css"

export function RegistroGastos(){
    return(
        <>
            <section className="gastos container">
                <div className="row my-5">
                    <div className="col-12 col-md-5">
                        <h3 className="title2 text-center">Registro de Gastos</h3>
                        <form className=" form p-5 border rounded ">

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-currency-dollar"></i>
                                </span>
                                <input type="float" className="form-control" placeholder="Monto"/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-calendar"></i>
                                </span>
                                <input type="date" className="form-control" placeholder="fecha" min={0}/>
                            </div>

                            <div className="">
                                <textarea className="form-control" placeholder="Descripción"></textarea>
                                <label htmlFor="floatingTextarea2"></label>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-fonts"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="nombre"/>
                            </div>

                            <button className="btn btn-outline-light w-100">Registrar</button>

                        </form>
                    </div>
                </div>
            </section>

            <section className="carrusel container">
                    <div className="col-12 col-md-4 offset-md-7 margin-custom-bottom">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/imagen1.jpg"
                                    alt="Primera imagen"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/imagen2.jpg"
                                    alt="Segunda imagen"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/imagen3.jpg"
                                    alt="Tercera imagen"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
            </section>
        </>
    )
}