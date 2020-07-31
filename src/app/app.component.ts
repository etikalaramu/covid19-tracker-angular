import { Component } from '@angular/core';
import { CovidService } from './covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cases:any={};
  
  title = 'routing';
  constructor(private cs:CovidService){}
  ngOnInit(){
    this.cs.getCases().subscribe((data)=>console.log(data))

    // this.cases.push(this.cs.getCases());
    // console.log(this.cases);
  }
}
