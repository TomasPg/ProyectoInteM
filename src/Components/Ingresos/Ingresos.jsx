import "./Ingresos.css"

export function Ingresos() {
  return (
    <>
        <section className="imagen">
            <img src="/tienda.jpg" alt="" />
        </section>
            <section className="ingresos container">
                <div className="row my-5">
                    <div className="col-12 col-md-5 offset-md-7">
                        <h3 className="title text-center">Registro de Ingresos</h3>
                        <form className="form p-5 border rounded ">

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
        </>
  )
}
