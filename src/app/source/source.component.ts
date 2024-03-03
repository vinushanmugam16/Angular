import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { SecondTestService } from '../secondtest.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent {

  constructor(private state: TestService){
     state.getMessage();
  }
}
