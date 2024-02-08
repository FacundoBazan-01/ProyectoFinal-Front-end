import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarC from "../components/NavbarC";


const RegisterPage = () => {
  /* A los estados puedo inicializarlos vacios o con algo en su interior, en este caso lo inicializamos con un obj para poder hacer las validaciones. Clase 31/10 */
const [estado, setEstado]=useState({
  usuario:"",
  contrasenia:"",
  rcontrasenia:"",
});

const changeValue = (ev)=>{
  const {name, value} = ev.target
  setEstado({...estado, [name]: value})
}

const handleClick = (ev)=>{
ev.preventDefault();

const {usuario, contrasenia, rcontrasenia} = estado
const usuarioLS = JSON.parse(localStorage.getItem("Usuarios")) || [];

if(!usuario || !contrasenia || ! rcontrasenia){
  setEstado(()=>({
    ...estado,
    usuario: !estado.usuario ? "error" : "",
    contrasenia: !estado.contrasenia ? "error" : "",
    rcontrasenia: !estado.rcontrasenia ? "error" : "",
  })); 
}else{
  if(contrasenia === rcontrasenia){
    if(usuarioLS.length === 0 ){
      const usuarioNuevo = {
        id: 1,
        nombre: usuario,
        contrasenia: contrasenia,
        role: "user",
        login: true,
        deleted:false,
      };
      usuarioLS.push(usuarioNuevo)
      localStorage.setItem("Usuarios",JSON.stringify(usuarioLS));
      localStorage.setItem("Usuario",JSON.stringify(usuarioNuevo))
      alert("Usuario creado correctamente")
      setTimeout(()=>{
        const usuarioExist = usuarioLS.filter((usuario)=> usuario.nombre === estado.usuario)
        if(usuarioExist[0].role === "Admin"){
          location.href="/Admin"
        }else{
          location.href="/Usuario"
        }
      },1000)

    }else{
      const usuarioLSFilter = usuarioLS.filter((usuario)=> usuario.nombre === estado.usuario)
      if(usuarioLSFilter.length > 0){
        return alert("El usuario ya existe")
      }
      const usuarioNuevo = {
        id: usuarioLS[usuarioLS.length -1].id+1,
        nombre: usuario,
        contrasenia: contrasenia,
        role: "Admin",
        login: true,
        deleted: false,
      };
      usuarioLS.push(usuarioNuevo)
      localStorage.setItem("Usuarios",JSON.stringify(usuarioLS));
      localStorage.setItem("Usuario",JSON.stringify(usuarioNuevo))
      alert("¡Usuario creado correctamente! Bienvenido")
      setTimeout(()=>{
        const usuarioExist = usuarioLS.filter((usuario)=> usuario.nombre === estado.usuario)
        if(usuarioExist[0].role === "Admin"){
          location.href="/Admin"
        }else{
          location.href="/Usuario"
        }
      },1000)
    }
  }else{
      alert("Las constraseñas no coinciden :(")
    }
}
}


 return (
		<>
			<h2>Registrarse</h2>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicUser'>
					<Form.Label>Usuario</Form.Label>
					<Form.Control
						type='text'
						placeholder='Ingrese usuario'
						name='usuario'
						onChange={changeValue}
						className={
							estado.usuario === "error"
								? "form-control is-invalid"
								: "form-control"
						}
					/>
					{estado.usuario === "error" && (
						<p className='text-danger'>¡Campo vacio!</p>
					)}
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type='password'
						placeholder='Ingrese contraseña'
						name='contraseña'
						onChange={changeValue}
						className={
							estado.contrasenia === "error"
								? "form-control is-invalid"
								: "form-control"
						}
					/>
					{estado.contrasenia === "error" && (
						<p className='text-danger'>¡Campo vacio!</p>
					)}
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword2'>
					<Form.Label>Repetir contraseña</Form.Label>
					<Form.Control
						type='password'
						placeholder='Repetir contraseña'
						name='rcontrasenia'
						onChange={changeValue}
						className={
							estado.rcontrasenia === "error"
								? "form-control is-invalid"
								: "form-control"
						}
					/>
					{estado.rcontrasenia === "error" && (
						<p className='text-danger'>¡Campo vacio!</p>
					)}
				</Form.Group>

				<Button variant='primary' type='submit' onClick={handleClick}>
					Enviar
				</Button>
			</Form>
		</>
 );
}

export default RegisterPage

