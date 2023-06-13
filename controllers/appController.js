//Controlador

const peticionGET = (req, res) => {
    try {
        //Posible consulta a la base de datos.
        res.json("Peticion GET");
    } catch (error) {
        //Muestro el error por consola
        console.log(error);
        res.status(500).json({ error: 'Ocurrio un error en el servidor.'});
    }
}

const peticionPOST = (req, res) => {
    try {
        res.json("Peticion POST");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ocurrio un error en el servidor.'});
    }
}

const peticionPUT = (req, res) => {
    try {
        res.json("Peticion PUT");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ocurrio un error en el servidor.'});
    }
}

const peticionDELETE = (req, res) => {
    try {
        res.json("Peticion DELETE");
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ocurrio un error en el servidor.'});
    }
}

export {
    peticionGET,
    peticionPOST,
    peticionPUT,
    peticionDELETE
}