import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent {

  firstname:string='';
  lastname: any='';
  username:string='';
  emailadd:string=''


  form:NgForm;

  onSubmit(form:NgForm){
   console.log(form);
 }

  // createUsername(){
  //   let user='';
  //   if(this.firstname.length>=3){
  //     user+=this.firstname.slice(0,3);
  //   }
  //   else{
  //     user+=this.firstname;
  //   }
  //   if(this.lastname.length>=3){
  //     user+=this.lastname.slice(0,3);
  //   }
  //   else{
  //     user+=this.lastname;
  //   }
  //   console.log(user);
//}
  
}