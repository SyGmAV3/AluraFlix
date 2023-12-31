import { Link } from "react-router-dom";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contenido">
        <Link to="/" className="footer__linkHome">
          <img
            className="footer__logo"
            src="/img/ProgrammingTUBElogo.png"
            alt="ProgrammingTUBE logo"
            title="AluraTUBE"
          />
        </Link>
        <div className="footer__contenedor_paginas">
          <p className="footer__contenedor_paginas_titulo">Menú</p>
          <ul className="footer__contenedor_paginas_lista">
            <li className="footer__contenedor_paginas_item">
              <Link to="#" title="Términos de Uso">
                Términos de Uso
              </Link>
            </li>
            <li className="footer__contenedor_paginas_item">
              <HashLink to={"/copyright/#Copyright"} title="Derechos de Autor">
                Derechos de Autor
              </HashLink>
            </li>
            <li className="footer__contenedor_paginas_item">
              <Link to="#" title="Política de Privacidad">
                Política de Privacidad
              </Link>
            </li>
            <li className="footer__contenedor_paginas_item">
              <HashLink
                to={"/#PreguntasFrecuentes"}
                title="Preguntas Frecuentes"
              >
                Preguntas Frecuentes
              </HashLink>
            </li>
            <li className="footer__contenedor_paginas_item">
              <Link to="#" title="Publicidad">
                Publicidad
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__datosDeveloper">
        Sitio Web diseñado y desarrollado 100% por{" "}
        <a
          href="https://github.com/SyGmAV3"
          target="_blank"
          className="footer__datosDeveloper__linksitioweb"
          title="Sitio Web Andrés L. Ospina"
          rel="noreferrer"
        >
          Andrés L. Ospina
        </a>{" "}
        utilizando el poder de{" "}
        <span style={{ color: "#8BB7F0" }}>
          React{" ("}
          <img
            style={{ marginBottom: "-2px" }}
            width="16"
            height="16"
            src="https://img.icons8.com/officel/16/react.png"
            alt="react"
          />
        </span>
        {") "}
        <div className="footer__iconos">
          <a
            className="footer_iconos--redes"
            href="https://www.facebook.com/AndresL.OspinaG/"
            title="Facebook de Andrés L. Ospina"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/clouds/100/facebook.png"
              alt="facebook"
            />
          </a>
          <a
            className="footer_iconos--redes"
            href="https://www.instagram.com/SyGmA_V3/"
            title="Instagram de Andrés L. Ospina"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/clouds/100/instagram-new--v3.png"
              alt="instagram"
            />
          </a>
          <a
            className="footer_iconos--redes"
            href="https://www.linkedin.com/in/sygmav3/"
            title="LinkedIn de Andrés L. Ospina"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/clouds/100/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a
            className="footer_iconos--redes"
            href="https://github.com/SyGmAV3"
            title="GitHub de Andrés L. Ospina"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/clouds/100/github.png"
              alt="github"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
