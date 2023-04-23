import '../styles/Login.css'
import data from '../db.json'
import md5 from 'md5'
import logo from '../assets/img/logo-celtics.png'

const Login = () => {


    const handleLogin = () => {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const message = document.querySelector('.inactive')
        const user = data.users.find(user => user.username === username && user.password === md5(password))
        if (user) {
            window.location = '/Home'
        }
        else {
            message.classList.remove('inactive')
        }
    }
    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className='title'>Iniciar Sesión</h1>
                <input
                    type="text"
                    id="username"
                    className="input input-username"
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    id="password"
                    placeholder="********"
                    className="input input-password"
                    required
                />
                <a className='message inactive'>¡Usuario o contraseña incorrectos!</a>
                <button
                    type="submit"
                    defaultValue="Log in"
                    className="primary-button login-button"
                    onClick={() => { handleLogin() }}
                >

                    Log in
                </button>
            </div>
        </div>
    )
}



export default Login

