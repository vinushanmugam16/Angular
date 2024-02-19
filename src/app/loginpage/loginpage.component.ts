import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  fullName:string='';
  password:string='';
  onLoginChange(){
    alert(`Welcome`);
  }
}
