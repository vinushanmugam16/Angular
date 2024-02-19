import {Injectable} from '@angular/core'
import { Login } from '../dependency/Model/login'

@Injectable({
    providedIn:'root'
})
export class LoginUserService{
    mainLogin:Login[]=[
        new Login('BindhuShree','1234'),
        new Login('Shanthu','1234'),
        new Login('Sita','1234'),
        new Login('Rama Sathya','1234'),
    ]
}