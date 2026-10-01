import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Brand from './Brand';

const Header = ({ onPreorder }) => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape') setExpanded(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return (
    <header className="header section">
      <div className="header__container container">
        <div className="header__wrapper">
          <div className="menu__wrapper fill--white-10">
            <button className="menu__head" aria-expanded={expanded} aria-controls="site-menu" onClick={() => setExpanded(!expanded)}>
              <span className="menu-item-text text--white">Menu</span>
              <div className="menu__icon-wrapper">
                <div className="menu__icon-circle"></div>
                <div className="menu__icon-circle"></div>
                <div className="menu__icon-circle"></div>
                <div className="menu__icon-circle"></div>
              </div>
            </button>
            
            <div className="menu__line fill--white-10"></div>
            
            <nav id="site-menu" className="menu__items" hidden={!expanded} aria-label="Navegación principal" onClick={() => setExpanded(false)}>
              <a href="#portafolio" className="menu__link text--dark-blue">Portafolio</a>
              <a href="#preorder" className="menu__link text--dark-blue">Contacto</a>
              <Link to="/blog" className="menu__link text--dark-blue">Blog</Link>
            </nav>
          </div>
          
          <a href="#top" className="logo__wrapper" aria-label="Zorro Tech, inicio">
            <Brand />
          </a>
          
          <button className="button fill--white-10 header-button" onClick={onPreorder}>
            <span className="menu-item-text text--white">Contacto</span>
            <span className="header-button__svg-icon">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6.50117 2.07446C6.92231 2.07446 7.2641 2.41626 7.2641 2.83739V5.73653H10.1632C10.3656 5.73653 10.5596 5.81691 10.7027 5.95999C10.8458 6.10307 10.9262 6.29712 10.9262 6.49946C10.9262 6.7018 10.8458 6.89586 10.7027 7.03894C10.5596 7.18201 10.3656 7.26239 10.1632 7.26239H7.2641V10.1615C7.2641 10.3639 7.18372 10.5579 7.04065 10.701C6.89757 10.8441 6.70351 10.9245 6.50117 10.9245C6.29883 10.9245 6.10478 10.8441 5.9617 10.701C5.81862 10.5579 5.73824 10.3639 5.73824 10.1615V7.26239H2.8391C2.63676 7.26239 2.44271 7.18201 2.29963 7.03894C2.15655 6.89586 2.07617 6.7018 2.07617 6.49946C2.07617 6.29712 2.15655 6.10307 2.29963 5.95999C2.44271 5.81691 2.63676 5.73653 2.8391 5.73653H5.73824V2.83739C5.73824 2.41626 6.08003 2.07446 6.50117 2.07446Z" fill="#FFFEFC"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
