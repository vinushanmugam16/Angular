import { Component, inject } from '@angular/core';
import { data, details, employeeData, studentData, tableheaderName, theadNamings } from './table-data';
import { Task } from './dependency/Model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
 
  
  name:string='';
key: any;
constructor(){
  this.name='Ruby';
}

state=true;
toUpdatechanges(){
  this.state=!this.state;
}


headings=tableheaderName;
data:data[]=studentData;


tablehead=theadNamings;
details:details[]=employeeData;

information:string='';
onMessaging(){
  this.information='Hello I\'m there';
}



}
