import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

stateReactive : FormGroup;



// ngOnInit(
//   this.stateReactive=new FormGroup{
//       email:new FormControl('',Validators.required , Validators.email),
//       password:new FormControl('',Validators.required , PatternValidator a-z A-Z)
//   }
// )


}
