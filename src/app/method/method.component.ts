import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent {

  @Input() message:string='';
  data:string='';
  title:string='';
  state:string='';

  
  constructor(){
    this.state='Hello from Constructor';
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
     console.log(changes);
    
  }

  ngOnInit(){
    this.data='Have a good Day';
    this.title='NgOnInit has called';
   
  }

}
