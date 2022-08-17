export class Perfil{

    public name:string
    public lastName:string
    public birthDate:string
    public genre:string
    public email:string
    public password:string
    public graduation:string

    constructor (
        name:string, 
        lastName:string, 
        birthDate:string,
        genre:string,
        email:string,
        password:string,
        graduation:string
        ){

            this.name=name
            this.lastName=lastName
            this.birthDate=birthDate
            this.genre=genre
            this.email=email
            this.password=password
            this.graduation=graduation

        }


    

}