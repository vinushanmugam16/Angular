import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  watch:string='Quartz';
  properties={
    productName:'Watch',
    productId:23450001,
    brand:'Quartz',
    color:['Gold','Black'],
    price:999,
    discount:5,
  }
  stock:number=0;
  person:string='Vinu';

 
  note:string='';
  receiveMsg($event:string){
   this.note=$event;
  }

  num:number;
  getNum(){
    this.num;
  }

  sentence:string=''

  source:string=' ';
  gettingString(event:any){
    this.source=event;
  }
}
