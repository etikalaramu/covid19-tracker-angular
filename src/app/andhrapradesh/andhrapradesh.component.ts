import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-andhrapradesh',
  templateUrl: './andhrapradesh.component.html',
  styleUrls: ['./andhrapradesh.component.css']
})
export class AndhrapradeshComponent implements OnInit {
  public cases:any[]=[];
  title = 'routing';
  constructor(private cs:CovidService){}
  ngOnInit(){
    this.cs.getCases().subscribe(data=>{
      this.cases.push(data);
      console.log(this.cases)})
  }
  
}
