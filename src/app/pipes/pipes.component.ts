import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  today:number=Date.now();

  word:string='Here this is converted to Uppercase'

  state:string='it is not an issue ';

  amount=19.9823;


  digit:number=23456;

  // data:string='';
  // constructor(){
  //   this.getData().then(v=>this.data = v);
  // }

  // getData(){
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>resolve('Promise completed'),1000);
  //   }
  //   )
  // }


  details:Object={
    name:['Lila','Sita','Diya'],
    place:'Chennai',
    role:'Developer'
  }

  join=new Date(2024,1,10);
  birthday=new Date(2002,3,16);
  
  state2=false;

  name='Vinu';

  toUpdateNum(phone){
    phone.value=9843652867;
  }

  source='Hi';

  fill='rgb(255,0,0)';
  changeColor(){
   this.fill;
  }


  value:number=3;
}
