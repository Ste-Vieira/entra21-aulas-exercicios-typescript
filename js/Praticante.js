import { Perfil } from "./Perfil.js";
export class Praticante extends Perfil {
    constructor(name, lastName, birtDate, genre, email, password, graduation) {
        super(name, lastName, birtDate, genre, email, password, graduation);
    }
    apresentar() {
        return `Meu nome é ${this.name} ${this.lastName} e meu e-mail é ${this.email}`;
    }
    modalidadePreferida() {
        return `Ainda não está implementado`;
    }
}
