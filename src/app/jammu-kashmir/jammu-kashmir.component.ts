import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-jammu-kashmir',
  templateUrl: './jammu-kashmir.component.html',
  styleUrls: ['./jammu-kashmir.component.css']
})
export class JammuKashmirComponent implements OnInit {

  public cases:any[]=[];
  title = 'routing';
  constructor(private cs:CovidService){}
  ngOnInit(){
    this.cs.getCases().subscribe(data=>{
      this.cases.push(data);
      console.log(this.cases)})
  }
  

}
