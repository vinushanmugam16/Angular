import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
 
  
  name:string='';
constructor(){
  this.name='Ruby';
}

state=true;
toUpdatechanges(){
  this.state=!this.state;
}
}
