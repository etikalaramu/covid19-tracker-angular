import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-telangana',
  templateUrl: './telangana.component.html',
  styleUrls: ['./telangana.component.css']
})
export class TelanganaComponent implements OnInit {

  public cases:any[]=[];
  title = 'routing';
  constructor(private cs:CovidService){}
  ngOnInit(){
    this.cs.getCases().subscribe(data=>{
      this.cases.push(data);
      console.log(this.cases)})
  }
  

}
