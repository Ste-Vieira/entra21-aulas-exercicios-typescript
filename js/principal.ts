import { Coach } from "./Coach.js";
import { Praticante } from "./Praticante.js"

console.log("================PRATICANTES================");


let praticante1:Praticante = new Praticante("Stephanie","Dias","27/11/1993","feminino","stephanie@email.com","1234","Desenvolvedora")
let praticante2:Praticante = new Praticante("Diogo","Martins","15/10/1992","masculino","diogo@email.com","1234","Administração")

console.log(praticante1.apresentar());
console.log(praticante2.apresentar());
console.log(praticante1.modalidadePreferida());


console.log("================COACHS================");


let coach1:Coach = new Coach("Henrique","Martins","15/01/1988","masculino","henrique@email.com","1234","Educação Física")
let coach2:Coach = new Coach("João","Souza","01/004/1978","masculino","joao@email.com","1234","Educação Física")

console.log(coach1.apresentar());
console.log(coach2.apresentar());


