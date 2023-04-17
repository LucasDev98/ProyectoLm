

export interface Usuario {
    usuario : string;
    password: string;
    nombre: string;
    mail: string;
    token : string;
    legajo : string;
}


export interface DataEmployed {
  status: string;
  msg:    null;
  data:   Employed[];
}

export interface Employed {
  dni:       number;
  direccion: string;
  telefono:  string;
  nombre:    string;
  legajo:    number;
  rol:       number;
  activo:    number;
}
