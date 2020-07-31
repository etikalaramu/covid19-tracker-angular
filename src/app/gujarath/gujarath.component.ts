import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-gujarath',
  templateUrl: './gujarath.component.html',
  styleUrls: ['./gujarath.component.css']
})
export class GujarathComponent implements OnInit {

  public cases:any[]=[];
  title = 'routing';
  constructor(private cs:CovidService){}
  ngOnInit(){
    this.cs.getCases().subscribe(data=>{
      this.cases.push(data);
      console.log(this.cases)})
  }
  

}
