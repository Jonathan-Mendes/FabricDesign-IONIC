export class User {

    public _id: string;
    private _nome: string;
    private _foto: string;
    private _admin: boolean;

    constructor(id?: string, nome?: string, foto?: string, admin?: boolean) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.admin = admin;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    public get foto(): string {
        return this._foto;
    }
    public set foto(value: string) {
        this._foto = value;
    }
    public get admin(): boolean {
        return this._admin;
    }
    public set admin(value: boolean) {
        this._admin = value;
    }
}