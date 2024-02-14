import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']

  // selector: '[app-practice]', //// component selector as attribute 
  // selector:'.app-practice',      ////component selector as css class 
  // selector:'#app-practice',        ////component selector as css id

})
export class PracticeComponent {
  studentName='Lila';

  productName:string='Lakme Kajal'                                               //string interpolation
  price:string='$99';
  color:string='Black Matte finishing'
  discount:number=10;
  available:boolean=true;


  grocery={
    fruit:'orange',
    vegetable:'BottleGuard',
    spices:'garlic',
    items:3,
    cost:250,
    discount:5
  }

 productImage='/assets/image/women-watch.jpg';
 


  greet='Hi,Greetings'
  getName(greet:string){
    return this.greet=greet;
  }


  @Input() digit:number=32;

  ngOnChanges(){

  }
  
}
