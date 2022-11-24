import { Link } from "react-router-dom";
import logoDev from "../../assets/image/terminalDev.png";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img
              src={logoDev}
              alt="Error Imagen Cargado"
              className="icono_render"
            ></img>{" "}
            Developer Bar
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item dropdown">
                <Link className="nav-link" to="/">
                  Dev-Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  DropDown
                </a>
                <ul className="dropdown-menu">

                  <li>
                  <Link className="dropdown-item" to="/login-route">
                    <button
                        type="button"
                        className="btn btn-danger"
                        id="resta"
                        name="resta"
                        onClick={() => {
                          //
                        }}
                      >
                        Login In
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/register-route" className="dropdown-item">
                      <button
                        type="submit"
                        className="btn btn-info"
                        id="suma"
                        name="suma"
                        onClick={() => {
                          //
                        }}
                      >
                        Register Now
                      </button>
                    </Link>
                  </li>
                  
                </ul>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
