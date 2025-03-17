import CartWidget from '../components/CartWidget'

const NavbarComponent = () => { 
    return (
        <nav className="navContainer">
            <a className="navlink" href="">
                <img src="/librarium-sarno/public/librarium-removebg-preview.png" alt="" className="logo" />
            </a>
            <a className="navlink" href="">Nosotros</a>
            <a className="navlink" href="">Libros</a>
            <a className="navlink" href="">eBooks</a>
            <CartWidget/>
        </nav>
    )
}

export default NavbarComponent