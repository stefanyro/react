import React from "react";

export default function HeaderFacebook({title}) {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              class="imagen"
              height="100"
              width="280"
              src="https://lh3.googleusercontent.com/zBCSDgWSuVgmnWnSG2FIX6QlscSELxeqHO_4RGUtb7tk88P0LIpxrk5q1pOnEH_VgK8yog=s170"
            />
            <h3>
              Facebook te ayuda a comunicarte y compartir con las personas que
              forman parte de tu vida.
            </h3>
          </div>
          <div className="col-6">
            <div class="alert alert-dismissible alert-light">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Correo electrónico o número de telefono"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg my-3"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" class="btn  btn-lg btn-info">
                    Iniciar sesión
                  </button>
                </div>
                <center>
                  <button type="button" class="btn btn-link">
                    ¿Olvidaste tu contraseña?
                  </button>
                </center>
                <center>
                  <button type="button" class="btn btn-success btn-lg">
                    Crear cuenta nueva
                  </button>
                </center>
              </form>
            </div>
            <center> {title}</center>
          </div>
        </div>
      </div>
    </div>
  );
}
