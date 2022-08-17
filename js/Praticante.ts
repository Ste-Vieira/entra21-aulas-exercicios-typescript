import { Perfil } from "./Perfil.js";

export class Praticante extends Perfil {

    constructor(name: string, lastName: string, birtDate: string, genre: string, email: string, password: string, graduation: string) {
        super(name, lastName, birtDate, genre, email, password, graduation)
    }

    public apresentar(): string {
        return `Meu nome é ${this.name} ${this.lastName} e meu e-mail é ${this.email}`
    }

    public modalidadePreferida(): string {
        return `Ainda não está implementado`
    }


}
