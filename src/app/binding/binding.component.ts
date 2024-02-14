import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  firstName:string='Vinudharshini';
  lastName:string='C S'

  sentence:string='Hi there , Good evening!'

  toChange=false;
  count=19;
  id=687


  name:string='';
  availableCount:number=0;
  toChangeName(){
        this.name='Elsa';   
       
  }

  toCount(){
    this.availableCount++;  
  }

  proverb='Little drop of water makes tiny ocean';

  change =true;
  details='Given details are verified '
    
  

  words=['computer','mouse','keyboard']


  city:string='Erode';
 


}
