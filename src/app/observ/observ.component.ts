import { Component } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';

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

   digit$= of(1,3,4,9)
    .subscribe({
      next:(value)=>console.log(value)
    });  
  

  

    num = of(10,22,13,65)
    .pipe(filter(n=>n%2==0)
    )
    .subscribe(value=>console.log(value));
 
 
  statement=of('Hello','All')
  .subscribe(value=>console.log(value));


  source=of(3,8,5,1)
  .pipe(map(val=>val*5))
  .subscribe(res=>console.log(res));


   items=of(6,0,1,7,8)
   .pipe(filter(n=>n%3===1),map(n=>n*n))
   .subscribe(response=>console.log('Result:',response));

   values=['Sam',1,54]
   obser=from(this.values)
   .subscribe(
    value=>console.log('Value:' ,value),
    error=>console.error('Error'),
    ()=>console.log('Complete')
   )
  
}
