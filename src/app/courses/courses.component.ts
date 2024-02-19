import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

      
    state: ActivatedRoute= inject(ActivatedRoute);
    searchingFor:string;
    ngOnInit(){
        this.searchingFor=this.state.snapshot.queryParams['search'];
    }


    
}
