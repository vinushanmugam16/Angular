import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnChanges{

  @Input() message:string='';
  constructor(){
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
     console.log(changes);
    
  }
}
