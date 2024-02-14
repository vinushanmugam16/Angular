import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
  // template:`<h1>Hello World</h1>`,
    // styles:`h1{color:blue;}`,
})
export class BasicComponent {

  name='';
  firstName='Vinudharshini';
  lastName='C S'

  getDetails(){
    return this.name= this.firstName+ " " +this.lastName;
  }
}
