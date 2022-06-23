export interface AuthResponse {
    exito:   boolean;
    mensaje: string;
    data:    Data;
}

export interface Data {
    token:          string;
    refreshToken:   string;
    changePassword: boolean;
    infUsuario:     InfUsuario;
}

export interface InfUsuario {
    idUser:          number;
    apellidoMaterno: null;
    apellidoPaterno: string;
    bloqueado:       boolean;
    email:           string;
    fechaCreacion:   Date;
    loginName:       string;
    nombre:          string;
    group:           number[];
    catExpedientes:  CatExpediente[];
    menu:            Menu[];
    modulo:          Modulo[];
}

export interface CatExpediente {
    descripcionTipo: string;
    idTipo:          number;
    idAcl:           number | null;
    nombreAcl:       null | string;
    n_permiso:       number;
    c_nombre:        CNombre;
}

export enum CNombre {
    Propietario = "PROPIETARIO",
}

export interface Menu {
    idMenu:        number;
    titulo:        string;
    ruta:          Ruta;
    icono:         string;
    mostrarInicio: boolean;
    descripcion:   string;
}

export enum Ruta {
    Administrador = "/administrador",
    Expedientes = "/expedientes",
    Inicio = "/inicio",
}

export interface Modulo {
    idModulo: number;
    modulo:   Ruta;
    ruta:     string;
    titulo:   string;
    idMenu:   number;
}
