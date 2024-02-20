import {Injectable, inject} from '@angular/core'
import { LoginUserService } from './loginuser.service';


@Injectable({
    providedIn:'root'
})
export class AuthService{
    isLogged:boolean=false;
    users: LoginUserService= inject(LoginUserService);

    login(fullName:string,password:string){
        this.users.mainLogin.find((value)=>value.fullName=== fullName && value.password===password );

            if(fullName===undefined){
                this.isLogged=false;
            }
            else{
                this.isLogged=true;
            }
            return this.users;
    }
    logout(){
        this.isLogged=false
    }
    isAuthenticated(){
        return this.isLogged;
    }
}