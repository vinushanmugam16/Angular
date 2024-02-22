import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css']
})
export class ObservComponent {


  data:any[]=[];

  state=new Observable((response)=>{
    response.next([23,'Bin',456, 'Apple']);
  })

  getData(){
    this.state.subscribe((value:any)=>{
      this.data=value;
    });
  }


  createObserve(){
    const digit$= of(1,3,4,9);
    digit$.subscribe({
      next:(value)=>console.log(value)

    });  
  }
 


}
