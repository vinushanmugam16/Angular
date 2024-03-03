import { Injectable } from '@angular/core';
import { SecondTestService } from './secondtest.service';

@Injectable({
  providedIn: 'root',
  // useClass:SecondTestService,
  // useValue: {
  //   getMessage(){
  //     console.log('Using Value ,message has sent')
  //   }
  // }
  // useExisting:SecondTestService,
})
export class TestService {


  getMessage() { 
    console.log('Hello World');
  }
}
