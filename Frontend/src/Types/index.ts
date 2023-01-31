export type CarroDTO = {
    id?: number;
    nome: string;
    marca: string;
    modelo: string;
    ano: number;
    km: number;
    valor: string | number;
    foto: string | ArrayBuffer | null;
}

export type TUser = {
    id: string;
    nome: string;
    role: string;
    senha: string;
    usuario: string;
}

export type UserDTO = {
    Nome: string;
    Usuario: string;
    Senha: string;
    Role: string;
}