import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario: string, password: string){
    //sessionStorage.setItem("isLogged", "true");
    sessionStorage.setItem("usuario",usuario);
    sessionStorage.setItem("password",password);
  }

  logout():void{
    sessionStorage.clear()    
  }

  isLogged():boolean{
    return !!sessionStorage.getItem("isLogged");
  }
}
