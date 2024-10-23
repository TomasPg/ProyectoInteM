import "./Inicio.css"
import {useState, useRef} from 'react'

export function Inicio (){

    //useState
const [userName, setUserName] = useState('')
const [age, setAge] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [city, setCity] = useState('')
const [dateTime, setDateTime] = useState('')

const [isErrorUsername, setErrorUserName] = useState(false) 
const [isErrorAge, setErrorAge] = useState(false)
const [isErrorPhone, setErrorPhone] = useState(false)
const [isErrorEmail, setErrorEmail] = useState(false)
const [isErrorPassword, setErrorPassword] = useState(false)
const [isErrorCity, setErrorCity] = useState(false)
const [isErrorDateTime, setErrorDateTime] = useState(false)

    //useRef
const inputUserName = useRef();
const inputAge = useRef();
const inputPhone = useRef();
const inputEmail = useRef();
const inputPassword = useRef();
const inputCity = useRef();
const inputDateTime = useRef();

const onSubmit = (e) =>{
    //Desactivar el postback del browser
    e.preventDefault()
    setErrorUserName(userName == "" ? true : false)
    setErrorAge(age == "" ? true : false)
    setErrorPhone(phone == "" ? true : false)
    setErrorEmail(email == "" ? true : false)
    setErrorPassword(password == "" ? true : false)
    setErrorCity(city == "" ? true : false)
    setErrorDateTime(dateTime == "" ? true : false)

     if(userName !="" && age != "" && phone != "" && email != "" && password != "" && city != "" && dateTime != ""){
        console.log(userName + " " + age + " " + phone + " " + email + " " + password + " " + city + " " + dateTime + " ")

        inputUserName.current.value = ""
        inputUserName.current.focus()

        inputAge.current.value = ""
        inputAge.current.focus()

        inputPhone.current.value = ""
        inputPhone.current.focus()

        inputEmail.current.value = ""
        inputEmail.current.focus()

        inputPassword.current.value = ""
        inputPassword.current.focus()
        
        inputCity.current.value = ""
        inputCity.current.focus()

        inputDateTime.current.value = ""
        inputDateTime.current.focus()
     }
    }
    return(
        <>

            <section className="container margin-custom-top">
                <div className="col-12 col-md-10 offset-md-3">
                    <div className="col-12 col-md-8">

                        <h3 className="title1 text-center">Registro de Usuarios</h3>

                        <form onSubmit={onSubmit} className=" form p-5 ">
                            
                            <div>
                            {isErrorUsername && <label style={{color:'white'}}>Debe ingresar el Usuario</label>}
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-person-circle"></i>
                                </span>
                                <input 
                                type="text"
                                name="userName"
                                className="form-control"
                                placeholder="Nombre"
                                value={userName}
                                onChange={username => setUserName(username.target.value)}
                                ref={inputUserName}
                                autoFocus/>
                            </div>

                            <div>
                            {isErrorAge && <label style={{color:'white'}}>Debe ingresar su Edad</label>}
                            </div>
                            
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-cake2-fill"></i>
                                </span>
                                <input 
                                type="number" 
                                name="age"
                                className="form-control" 
                                placeholder="Edad" min={0}
                                value={age}
                                onChange={age => setAge(age.target.value)}
                                ref={inputAge}
                                autoFocus/>
                            </div>

                            <div>
                            {isErrorPhone && <label style={{color:'white'}}>Debe ingresar su #Telefono</label>}
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-telephone-fill"></i>
                                </span>
                                <input 
                                type="text" 
                                name="phone"
                                className="form-control" 
                                placeholder="Telefono"
                                value={phone}
                                onChange={phone => setPhone(phone.target.value)}
                                ref={inputPhone}
                                autoFocus/>
                            </div>

                            <div>
                            {isErrorEmail && <label style={{color:'white'}}>Debe ingresar su Correo Electronico</label>}
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-envelope-fill"></i>
                                </span>
                                <input 
                                type="text" 
                                name="email"
                                className="form-control" 
                                placeholder="Correo"
                                value={email}
                                onChange={email => setEmail(email.target.value)}
                                ref={inputEmail}
                                autoFocus/>
                            </div>

                            <div>
                            {isErrorPassword && <label style={{color:'white'}}>Debe ingresar su Correo Contraseña</label>}
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-key-fill"></i>
                                </span>
                                <input 
                                type="password" 
                                name="password"
                                className="form-control" 
                                placeholder="Contraseña"
                                value={password}
                                onChange={password => setPassword(password.target.value)}
                                ref={inputPassword}
                                autoFocus/>
                            </div>

                            <div>
                            {isErrorDateTime && <label style={{color:'white'}}>Debe ingresar su Fecha de Regitro</label>}
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-calendar"></i>
                                </span>
                                <input 
                                type="date" 
                                name="dateTime"
                                className="form-control" 
                                placeholder="Fecha de Registro"
                                value={dateTime}
                                onChange={datetime => setDateTime(datetime.target.value)}
                                ref={inputDateTime}
                                autoFocus/>
                            </div>

                            <div>
                            {isErrorCity && <label style={{color:'white'}}>Debe ingresar su Ciudad</label>}
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-building"></i>
                                </span>
                                <input 
                                type="text" 
                                name="city"
                                className="form-control" 
                                placeholder="Ciudad"
                                value={city}
                                onChange={city => setCity(city.target.value)}
                                ref={inputCity}
                                autoFocus/>
                            </div>

                            <button className="btn btn-outline-light w-100">Registrar</button>

                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}