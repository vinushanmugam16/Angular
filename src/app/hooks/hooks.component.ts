import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component ,DoCheck,Input, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input() data:string='';
  count:number=0;
  title:string='';
  constructor(){
      this.title='Constructor has occured';
      console.log(this.title);
  }

  ngOnChanges(): void {
      this.count++;
      console.log('ngOnChanges have called');
  }
  ngOnInit():void{
    console.log('ngOnInit have called');
  }
   
  ngDoCheck(): void {
    console.log('ngDocheck has called');
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit has called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck has called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit has called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked has called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy has called');
  }
////////////////////////////////////////////////////////


  // ngOnInit(): void {
  //   console.log('NgOnInit has occured');
  //   this.title='Hello ngOnInit';

  // }

  // ngOnChanges():void{
  //     console.log('The Name has changed')
  // }
  
  // ngDoCheck(): void {
  //   console.log(' Docheck change Updates')
  // }
  // ngOnDestroy(): void {
  //   console.log('Destroy the changes');
  // }


//   products=[{
//   productName:'Watch',
//   productId:23450001,
//   brand:'Quartz',
//   color:['Gold','Black'],
//   price:999,
//   discount:5,
//   imgUrl:'/home/vinushanmugam/myapp/src/assets/image/women-watch.jpg'
//  }]


}
