import { Praticante } from "./Praticante.js"

let praticante1:Praticante = new Praticante("Stephanie","Dias","27/11/1993","feminino","stephanie@email.com","1234","Desenvolvedora")
let praticante2:Praticante = new Praticante("Diogo","Martins","15/10/1992","masculino","diogo@email.com","1234","Administração")

console.log(praticante1.apresentar());
console.log(praticante2.apresentar());

