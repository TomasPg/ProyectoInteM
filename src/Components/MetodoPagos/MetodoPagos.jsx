import "./MetodoPago.css"
export function MetodoPagos (){
    return (
        <>
        <section className="imagenp1">
            <img src="/personas2.avif" alt="" />
        </section>
    <section className="pagos container">
      <div className="row my-5">
          <div className="col-12 col-md-5 offset-md-7">
              <h3 className="title text-center">Metodo de pago</h3>
              <form className="form p-5 border rounded ">

              <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-fonts"></i>
                      </span>
                      <input type="text" className="form-control" placeholder="Metodo de pago"/>
                  </div>

                  <div className="">
                      <textarea className="form-control" placeholder="Descripción"></textarea>
                      <label htmlFor="floatingTextarea2"></label>
                  </div>
                  <button className="btn btn-outline-light w-100">Registrar</button>

              </form>
          </div>
      </div>
    </section>
    </>
    )
}