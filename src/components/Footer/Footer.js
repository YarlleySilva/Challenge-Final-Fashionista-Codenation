import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./footer.css";

export default function Footer() {
  return (
    <div data-testid="footer" className="footer">

      <>
        <h1 className="footer_h1">Desenvolvido por Yarlley Silva</h1>
        <div className="footer__icons">

          <a href="https://www.linkedin.com/in/yarlleysilva/" target="_blank" rel="noopener noreferrer" >
            <FaLinkedin className="icon icon--linkedin" />
          </a>

          <a href="https://github.com/YarlleySilva" target="_blank" rel="noopener noreferrer" >
            <FaGithub className="icon icon--github" />
          </a>

        </div>
      </>
    </div>
  );
}
