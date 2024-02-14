import { Component } from '@angular/core';
import { SourceService } from '../service/source.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers:[SourceService]
})
export class FooterComponent {


   constructor(private sub:SourceService){

   }
  toUpdateText(){
    this.sub.updatingText();
  }
}
