import { Component, EventEmitter ,Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../dependency/Model/task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-httpclient-module',
  templateUrl: './httpclient-module.component.html',
  styleUrls: ['./httpclient-module.component.css']
})
export class HttpclientModuleComponent {
firstname: any;
lastname: any;


@Output() taskdata:EventEmitter<Task>=new EventEmitter<Task>() ;


onSubmit(form:NgForm){
  this.taskdata.emit(form.value);
  console.log(form);
}

}
