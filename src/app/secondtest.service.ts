import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondTestService {

  getMessage() { 
    console.log('Welcome All');
  }
}
