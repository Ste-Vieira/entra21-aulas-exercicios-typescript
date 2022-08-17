"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Praticante_js_1 = require("./Praticante.js");
let praticante1 = new Praticante_js_1.Praticante("Stephanie", "Dias", "27/11/1993", "feminino", "stephanie@email.com", "1234", "Desenvolvedora");
let praticante2 = new Praticante_js_1.Praticante("Diogo", "Martins", "15/10/1992", "masculino", "diogo@email.com", "1234", "Administração");
console.log(praticante1.apresentar());
console.log(praticante2.apresentar());
