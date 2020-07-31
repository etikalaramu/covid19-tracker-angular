import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-maharashtra',
  templateUrl: './maharashtra.component.html',
  styleUrls: ['./maharashtra.component.css']
})
export class MaharashtraComponent implements OnInit {
  public cases:any[]=[];
  title = 'routing';
  constructor(private cs:CovidService){}
  ngOnInit(){
    this.cs.getCases().subscribe(data=>{
      this.cases.push(data);
      console.log(this.cases)})
  }
  

}
