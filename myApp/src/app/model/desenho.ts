export class Desenho {

    public _id: string;
    public _nomeTecido: string;
    public _desenho: string;
    public _tipoBatida: string;
    public _batidaUnica: string;
    public _batidaZ1: string;
    public _batidaZ2: string;
    public _batidaZ3: string;
    private _tipoPre: string;
    public _preCorUnica: string;
    public _preCorMult1: string;
    public _preCorMult2: string;
    public _preCorMult3: string;
    public _preCorMult4: string;
    public _doD: string;
    public _tear: string;
    public _categoria: string;
    
    constructor(id?: string, nomeTecido?: string, desenho?: string, tipoBatida?: string, batidaUnica?: string, batidaZ1?: string, batidaZ2?: string, batidaZ3?: string, doD?: string, tipoPre?: string, preCorUnica?: string, preCorMult1?: string, preCorMult2?: string, preCorMult3?: string, preCorMult4?: string, tear?: string, categoria?: string) {
        this.id = id;
        this.nomeTecido = nomeTecido;
        this.desenho = desenho;
        this.tipoBatida = tipoBatida;
        this.batidaUnica = batidaUnica;
        this.batidaZ1 = batidaZ1;
        this.batidaZ2 = batidaZ2;
        this.batidaZ3 = batidaZ3;
        this.doD = doD;
        this.tipoPre = tipoPre;
        this.preCorUnica = preCorUnica;
        this.preCorMult1 = preCorMult1;
        this.preCorMult2 = preCorMult2;
        this.preCorMult3 = preCorMult3;
        this.preCorMult4 = preCorMult4;
        this.tear = tear;
        this.categoria = categoria;
    }

    public get tipoPre(): string {
        return this._tipoPre;
    }
    public set tipoPre(value: string) {
        this._tipoPre = value;
    }
    public get preCorUnica(): string {
        return this._preCorUnica;
    }
    public set preCorUnica(value: string) {
        this._preCorUnica = value;
    }
    public get preCorMult1(): string {
        return this._preCorMult1;
    }
    public set preCorMult1(value: string) {
        this._preCorMult1 = value;
    }
    public get preCorMult2(): string {
        return this._preCorMult2;
    }
    public set preCorMult2(value: string) {
        this._preCorMult2 = value;
    }
    public get preCorMult3(): string {
        return this._preCorMult3;
    }
    public set preCorMult3(value: string) {
        this._preCorMult3 = value;
    }
    public get preCorMult4(): string {
        return this._preCorMult4;
    }
    public set preCorMult4(value: string) {
        this._preCorMult4 = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get nomeTecido(): string {
        return this._nomeTecido;
    }
    public set nomeTecido(value: string) {
        this._nomeTecido = value;
    }
    public get desenho(): string {
        return this._desenho;
    }
    public set desenho(value: string) {
        this._desenho = value;
    }
    public get tipoBatida(): string {
        return this._tipoBatida;
    }
    public set tipoBatida(value: string) {
        this._tipoBatida = value;
    }
    public get batidaUnica(): string {
        return this._batidaUnica;
    }
    public set batidaUnica(value: string) {
        this._batidaUnica = value;
    }
    public get batidaZ1(): string {
        return this._batidaZ1;
    }
    public set batidaZ1(value: string) {
        this._batidaZ1 = value;
    }
    public get tear(): string {
        return this._tear;
    }
    public set tear(value: string) {
        this._tear = value;
    }
    public get batidaZ2(): string {
        return this._batidaZ2;
    }
    public set batidaZ2(value: string) {
        this._batidaZ2 = value;
    }
    public get batidaZ3(): string {
        return this._batidaZ3;
    }
    public set batidaZ3(value: string) {
        this._batidaZ3 = value;
    }
    public get doD(): string {
        return this._doD;
    }
    public set doD(value: string) {
        this._doD = value;
    }
    public get categoria(): string {
        return this._categoria;
    }
    public set categoria(value: string) {
        this._categoria = value;
    }
}