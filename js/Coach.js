import { Perfil } from "./Perfil.js";
export class Coach extends Perfil {
    apresentar() {
        return `Meu nome é ${this.name} ${this.lastName} e sou professor(a) de ${this.graduation}`;
    }
}
