
const peticionGET = (req, res) => {
    try {
        res.json({msg: 'Peticion GET'});
    } catch (error) {
        
        console.log(error);
        res.status(500).json({ error: 'Ocurrio un error en el servidor.'});
    }
}

const peticionPOST = (req, res) => {
    try {
        res.json({ msg: 'Peticion POST'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ocurrio un error en el servidor.'});
    }
}

const peticionPUT = (req, res) => {
    try {
        res.json({ msg: "Peticion PUT" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Ocurrio un error en el servidor.'});
    }
}

const peticionDELETE = (req, res) => {
    try {
        res.json({ msg: "Peticion DELETE" });
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