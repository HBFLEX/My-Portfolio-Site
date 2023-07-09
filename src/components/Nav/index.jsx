import { h } from 'preact'
import navData from '../../data/navData'
import Styles from './styles.module.scss'

export default function Nav(){
    return(
        <nav className={`navbar navbar-light fixed-top ${Styles.navbar}`}>
            <div className="container-fluid">
                <a className={Styles.navbarBrand} href="/" data-aos="zoom-in">HBFL3X</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className={`${Styles.navHamburger} navbar-toggler-icon`}></span>
                </button>
                <div className={`${Styles.menuCanvas} offcanvas offcanvas-end`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        {
                            navData.map((link) => (
                                <li className="nav-item">
                                    <a className={`${Styles.navLink} link-item`} href={link.path}>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    )
}