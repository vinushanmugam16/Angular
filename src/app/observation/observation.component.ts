import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Subject, filter, first, from, fromEvent, interval, map, merge, of, tap, zip } from 'rxjs';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements AfterViewInit{

  arrayValues=[];
  items;
  constructor(private element:ElementRef){}
  @ViewChild('createbtn')


numbers=of(1,4,8,6)
.pipe((map(value=>value+3)))
.subscribe((result)=>
  console.log(result));


addValues=of(23,1,5,6)
.pipe((first()))
.subscribe((response)=>console.log(response))



source=[32,76,98,100,77,53];
source2=['Vinu','Janu','Linga','Arogya','Ken']
myObserve =of(this.source,this.source2,'Sumi', 400);

getNumbers(){
  this.myObserve.subscribe({
    next:(value)=>{
      this.arrayValues.push(value)
      console.log(value)
    },
    error:(err)=>{
      console.error(err);
    },
    complete(){
      console.log('All the numbers have passed')
    }
  })
}



buttonClicked(){
  this.items= fromEvent(this.element.nativeElement,'click')
  .subscribe((response)=>console.log('Button Clicked',response))
 }
 
 ngAfterViewInit(){
   this.buttonClicked()
 }
 

operate=from(this.source)
.subscribe((response)=>console.log('These values are iterating:',response))


numberList=from('There is something noticed')
.subscribe((response)=>console.log(response))


transformedData=from(this.source)
.pipe(filter(value=>value%4==0))
.subscribe((response)=>console.log('Divided by 4',response))


selectName=from(this.source2)
.pipe(filter(val=>val.length<=4))
.subscribe((response)=>console.log(response))


givenValues=of(3,5,3,2,6)
.pipe((tap(val=>console.log('Value before adding:',val))),
map(val=>val+3),
tap((val=>console.log('Value After adding:',val))))
.subscribe((response=>console.log('final',response)))


words=of('call','step','bigger')
timeTaken=interval(1000)
combine=zip(this.words,this.timeTaken)
.subscribe(([word, time]) => {
  console.log(`Word: ${word}, Time: ${time}`)});


   cart= of('pen', 'ink', 'pencil','ball');
   range=of(12,42,78)
  mergedWords = merge(this.cart, this.range)
  .subscribe(data => {
    console.log("Merged Products:",data);
  });




mySub = new Subject();

getNewValues(){
  this.mySub.subscribe(response=>console.log('Value :',response));

  this.mySub.next(23);
  this.mySub.next(45);
}




}
