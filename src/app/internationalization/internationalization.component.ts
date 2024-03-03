import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-internationalization',
  templateUrl: './internationalization.component.html',
  styleUrls: ['./internationalization.component.css']
})
export class InternationalizationComponent {

  constructor(private titleName:Title){}

  $localize:`Hello World`
}
