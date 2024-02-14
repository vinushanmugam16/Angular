import { Component } from '@angular/core';
import { SourceService } from '../service/source.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[SourceService]
})
export class MainComponent {


  constructor(private sub:SourceService){

  }

  onChange(){
    // this.text=prompt('The button is clicked');
     this.sub.updatingText();

  }



    // text='';
  // onChange(event:any){
  //   this.text=event.target.text;
  // }
}
