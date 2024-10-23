import "./Categoria.css"

export function Categoria() {
  return (
    <>
      <section className="imagenP">
        <img src="/personas.jpg" alt="" />
      </section>
    <section className="categoria container">
      <div className="row my-5">
          <div className="col-12 col-md-5 offset-md-7">
              <h3 className="title text-center">Categoria de pago</h3>
              <form className="form p-5 border rounded ">

              <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-fonts"></i>
                      </span>
                      <input type="text" className="form-control" placeholder="Categoria de pago"/>
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
 