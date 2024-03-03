import { Component } from '@angular/core';
import { state, style, transition, trigger,animate } from '@angular/animations';

@Component({
  selector: 'app-animating',
  templateUrl: './animating.component.html',
  styleUrls: ['./animating.component.css'],
  // animations:[ 
  //   trigger('clicktrigger',[
  //     state('clicked',style({
  //   backgroundColor:'blue',
  //   width:'100px'
      
  // })),
  //     state('close',style({
  //       backgroundColor:'red',
  //       width:'100px'
  //     })),
  // ])]
   animations:[
    trigger('toggleClick',[
      state('open',style({
        backgroundColor:'green',
        opacity:1
      })),
      state('close',style({
        backgroundColor:'deeppink',
        opacity:0
      })),
      transition('open => close', animate('1s 600ms ease-out')),
      transition('close => open',animate('2s 300ms ease-in'))
    ])
   ]
})

export class AnimatingComponent {

isColor:boolean=true;

 toggling(){
  this.isColor=!this.isColor;
 }
 

 
  
}
