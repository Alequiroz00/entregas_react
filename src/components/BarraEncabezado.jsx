import "../css/BarraEncabezado.css"

const BarraEncabezado = ()=>{
    return(
        <div className="top-bar">
            <div className="redes">
                <img src="../logo_facebook.png" alt="logo facebook blanco" />
                <img src="../logo_instagram.png" alt="logo instgram blanco" />
                <img src="../logo_whatsapp.png" alt="logo whatsapp blanco" />
            </div>
            <div className="location">
                <img  src="../location_pin.png" alt="pin de ubicacion" />
                <p>Cba, ARG</p>
            </div>
        </div>
    )
}

export default BarraEncabezado