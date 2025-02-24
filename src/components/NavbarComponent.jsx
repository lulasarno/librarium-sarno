import CartWidget from '../components/CartWidget'

const NavbarComponent = () => { 
    return (
        <nav className="navContainer">
            <a className="navlink" href="">
                <img src="../librarium.png" alt="" className="logo" />
            </a>
            <a className="navlink" href="">Nosotros</a>
            <a className="navlink" href="">SHOP</a>
            <a className="navlink" href="">eBooks</a>
            <CartWidget/>
        </nav>
    )
}

export default NavbarComponent