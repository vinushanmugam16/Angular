import { Component } from '@angular/core';
import { SourceService } from './service/source.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css'],
  // providers:[DependencyComponent]
  // providers:[SourceService]
  // providers:[UserService]
})
export class DependencyComponent {
   constructor(private detail:UserService){

   }

   state2=this.detail.getAll();

}

