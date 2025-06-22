import React, { useState } from "react";
import style from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style['login-page']}>
      <main className={style['login-container']}>
        <div className={style['form-section']}>
          <form>
            <h1>Login</h1>
            <input type="email" placeholder="Email" required />

            <div className={style['password-container']}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Senha (pelo menos 10 caracteres)"
                minLength="10"
                required
              />
              <span
                id="eyeicon"
                className={style['eye-icon']}
                onClick={togglePasswordVisibility}
              >
                <i className={`fa fa-eye${showPassword ? '-slash' : ''}`} />
              </span>
            </div>

            {/* Link estilizado para recuperação de senha */}
            <Link to="/forgot-password" className={style['forgot-link']}>
              Esqueceu sua senha?
            </Link>

            <button type="submit">Entrar</button>

            {/* Link estilizado para registro */}
            <Link to="/register" className={style['register-link']}>
              Novo aqui? <span>Crie sua conta</span>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
