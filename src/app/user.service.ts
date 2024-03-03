import { Injectable } from '@angular/core';
import { User } from './dependency/Model/user';

// import { User } from "../Model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  state:User[]=[
      new User('Lila','Female','Active'),
      new User('Tina','Female','InActive')
  ];


  getAll(){
    return this.state;
  }

  createDetail(name,gender,status){
    let result=new User(name,gender,status)
  }

}


// "i18n": {
//   "sourceLocale": "en-US",
//   "locales": {
//     "fr":{
//       "translation":"src/locale/messages.fr.xlf"
//     } 
//   }
// },