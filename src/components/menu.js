import './menu.css';

const CustomMenu = (props) => {
    return (
        <div className='menu-bar col-3'>
            <h3 className='menu-item'>Menu</h3>
            <ul>
                <li className='menu-item'>
                    Lista de propiedades
                </li>
                <li className='menu-item'>
                    Comprar
                </li>
                <li className='menu-item'>
                    vender
                </li>
            </ul>
        </div>
    );
};

export default CustomMenu;