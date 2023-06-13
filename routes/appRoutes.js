import express from "express";
import { peticionGET, peticionPOST, peticionPUT, peticionDELETE } from "../controllers/appController.js";

//Se instancia el enrutador.
const router = express.Router();

router.get('/get', peticionGET );
router.post('/post', peticionPOST );
router.put('/put', peticionPUT );
router.delete('/delete', peticionDELETE );

export default router;