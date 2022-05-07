//Login - Editar el contenido de un post publicado -  Listar posts en interfaz de administrador

import { URL, LOGIN_EMAIL, LOGIN_PASSWORD } from "./env";
import { login, crearPost, editarPost } from "./functions";


describe('Escenario 3', function () {
    it('Iniciar sesión, editar un post y listar post', function () {
        login();
        crearPost('Prueba', 'texto de prueba escenario 3');
        editarPost(' con Título editado', 'Contenido editado')
    })
})
