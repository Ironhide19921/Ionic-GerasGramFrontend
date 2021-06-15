export interface RespuestaPosts {
  ok: boolean;
  pagina: number;
  posts: Post[];
}
// el ? es para que sea opcional
export interface Post {
  imgs?: string[];
  _id?: string;
  mensaje?: string;
  coords?: string;
  usuario?: Usuario;
  created?: string;
}

export interface Usuario {
  avatar?: string;
  _id?: string;
  nombre?: string;
  email?: string;
  password?: string;
}
