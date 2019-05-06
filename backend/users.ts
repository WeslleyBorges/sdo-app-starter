export class User{
    constructor(public email: string,
                public name: string,
                public password: string){}
  
    matches(another: User): boolean {
      return another !== undefined && 
         another.email === this.email && 
         another.password === this.password  
    }
}

export const users = {
    "rsidrome@gmail.com": new User('rsidrome@gmail.com','Robervald','sidrome2'),
    "sidrome2@yahoo.com.br": new User('sidrome2@yahoo.com.br','Robervald','sidrome2'),
}