import { Component } from '@angular/core';
import { SourceService } from '../../service/source.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor(private sub:SourceService){

  }

  onChange(){
    // this.text=prompt('The button is clicked');
     this.sub.updatingText();

  }
}
