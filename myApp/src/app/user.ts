export class User {

    private _id: string;
    private _user: string;
    private _password: string;

    constructor(id?: string, user?: string, password?: string) {
        this.id = id;
        this.user = user;
        this.password = password;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get user(): string {
        return this._user;
    }
    public set user(value: string) {
        this._user = value;
    }
}