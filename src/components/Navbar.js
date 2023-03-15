
import CartWidget from './CartWidget'
import './assets/images-2.jpg'
import './Navbar.css'
import Button from './Button/Button'


const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>Venta de componentes</h1>
            <div>
            <Button label="Placas de video" callback={() => console.log('Placas de video')} />
            <Button label="Procesadores" callback={() => console.log('Procesadores')} />
            <Button label="Gabinetes" callback={() => console.log('Gabinetes')} />
            <Button label="Fuentes" callback={() => console.log('Fuentes')} />
            <Button label="Memorias" callback={() => console.log('Memorias')} />
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
}
export default Navbar