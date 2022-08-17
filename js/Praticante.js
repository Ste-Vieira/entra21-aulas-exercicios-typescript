"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Praticante = void 0;
const Perfil_js_1 = require("./Perfil.js");
class Praticante extends Perfil_js_1.Perfil {
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
exports.Praticante = Praticante;
