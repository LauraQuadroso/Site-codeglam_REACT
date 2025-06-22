import React, { useState } from "react";
import style from './ForgotPassword.module.css'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode fazer uma requisição para o backend para enviar o email
    console.log("Enviando link para:", email);

    // Simulação de envio de email
    setEmailSent(true);
  };

  return (
    <div className={style['forgot-page']}>
      <main className={style['forgot-container']}>
        <div className={style['form-section']}>
          <form onSubmit={handleSubmit}>
            <h1>Recuperar Senha</h1>

            {emailSent ? (
              <p className={style['success-msg']}>
                Um link de redefinição foi enviado para <strong>{email}</strong>.
              </p>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Enviar link de recuperação</button>
              </>
            )}

            <Link to="/login" className={style['back-link']}>
              Voltar para o login
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
