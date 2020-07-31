import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-madhya-pradesh',
  templateUrl: './madhya-pradesh.component.html',
  styleUrls: ['./madhya-pradesh.component.css']
})
export class MadhyaPradeshComponent implements OnInit {

  public cases:any[]=[];
  title = 'routing';
  constructor(private cs:CovidService){}
  ngOnInit(){
    this.cs.getCases().subscribe(data=>{
      this.cases.push(data);
      console.log(this.cases)})
  }
  
}
