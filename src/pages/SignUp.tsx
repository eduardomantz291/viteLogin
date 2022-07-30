export default function SignUp() {
  return(
   <div className="container">
    <header className="header-web">
      <h1 className="title">ViteForm</h1>
    </header>

    <section className="section-wrapper">
      <form>
        <div className="input-block">
          <label htmlFor="input-email">Email</label>
          <input type="email" name="input-email" className="input-email" />
        </div>
        <div className="input-block">
          <label htmlFor="input-password">Senha</label>
          <input type="password" name="input-password" className="input-password" />
        </div>

        <button className="btn-login">Logar</button>
        <small className="register">Criar conta</small>
      </form>
    </section>
   </div>
  )
}