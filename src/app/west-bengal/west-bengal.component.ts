import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-west-bengal',
  templateUrl: './west-bengal.component.html',
  styleUrls: ['./west-bengal.component.css']
})
export class WestBengalComponent implements OnInit {
  public cases:any[]=[];
  title = 'routing';
  constructor(private cs:CovidService){}
  ngOnInit(){
    this.cs.getCases().subscribe(data=>{
      this.cases.push(data);
      console.log(this.cases)})
  }
  

}
