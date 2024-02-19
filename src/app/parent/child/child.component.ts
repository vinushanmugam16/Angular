import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() product:string='';

  imgUrl='/assets/image/women-watch.jpg';

  @Input() inStock:number=0;

  @Input() property:{
    productName: string;
    productId: number;
    brand: string;
    color: string[];
    price: number;
    discount: number;
  }

 
  @Input()  name: string='';
  set personName(name:string){
    this.name=name;
  }
  get personName():string{
    return `Got the output ${this.name} using getter and setter`;
  }

 @Input() size:number=0;
updateSize(event:any){
  this.size=event.target.size;
}

dec(){
    this.size--;
}
inc(){
    this.size++;
}


  pass:boolean=false;
  contact:number=9876543210;

  count:number=0;
  onCount(){
    this.count++;
  }

 text:string='Hi all';
 onChangeText(){
  this.text='Greetings of the day';
 }

  words:string[]=['System','Software','Power'];

  note:boolean=true;

  searchText:string='';
  updateText(event:any){
    this.searchText=event.target.value;
  }



value:string[]=['One','Two','Three','four'];
selectedValue='five';

@Output() message=new EventEmitter<string>();
onChange(){
  this.message.emit('Hello World');
}

@Output() state=new EventEmitter<any>();
updateValue(){
  this.state.emit(12345);
}

@Output() state2:EventEmitter<string>=new EventEmitter<string>();
specifiedLine:string='Getting data flow from child to parent';
getState(){
  this.state2.emit(this.specifiedLine);
}
}



