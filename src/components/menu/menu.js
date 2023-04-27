import './menu.css';

const CustomMenu = (props) => {
    return (
      <div className="menu-bar col-3">
        <h3 className="menu-item">Menu</h3>
        <ul>
            <button onClick={() => props.resetPage()}>
                <li className="menu-item">Lista de propiedades</li>
            </button>
          <li className="menu-item">Publicar inmueble</li>
          <li className="menu-item">vender</li>
        </ul>
        {props.isSceneSelect && (
            <button onClick={() => props.resetPage()}>Atrás</button>
        )}
      </div>
    );
};

export default CustomMenu;