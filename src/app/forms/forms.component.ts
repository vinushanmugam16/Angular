import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../validators/nospace.validator';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{



   reactiveform:FormGroup;

  

   ngOnInit(): void {
     this.reactiveform=new FormGroup({
      firstname: new FormControl(null, [Validators.required,CustomValidators.noSpace]),
      lastname: new FormControl(null ,[Validators.required,CustomValidators.noSpace]),
      username: new FormControl(null),
      gender: new FormControl('male'),
      phoneNumber: new FormControl(null),
      dob: new FormControl(null),
      email: new FormControl(null, [Validators.required,Validators.email,CustomValidators.noSpace]),
      country: new FormControl('India'),
     })

  
     
   }

   onSubmit(){
    console.log(this.reactiveform);
  }

   createUsername(){
      let user='';
      const firstname:string=this.reactiveform.get('firstname').value;
      const lastname:string=this.reactiveform.get('lastname').value;

      if(firstname.length>=3){
        user+=firstname.slice(0,3);
      }
      else{
        user+=firstname;
      }
      if(lastname.length>=3){
        user+=lastname.slice(0,3);
      }
      else{
        user+=lastname;
      }
      // console.log(user);

      // this.reactiveform.setValue({
      //   firstname: this.reactiveform.get('firstname').value,
      //   lastname: this.reactiveform.get('lastname').value,
      //   username: user,
      //   gender: this.reactiveform.get('gender').value,
      //   phoneNumber: this.reactiveform.get('phoneNumber').value,
      //   dob: this.reactiveform.get('dob').value,
      //   email: this.reactiveform.get('email').value,
      //   country: this.reactiveform.get('country').value,
      // })

      this.reactiveform.get('username').setValue(user);

      // this.reactiveform.patchValue({
      //   username:user
      // })
   }
  
}
