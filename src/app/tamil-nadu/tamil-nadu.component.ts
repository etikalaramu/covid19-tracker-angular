import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-tamil-nadu',
  templateUrl: './tamil-nadu.component.html',
  styleUrls: ['./tamil-nadu.component.css']
})
export class TamilNaduComponent implements OnInit {

  public cases:any[]=[];
  title = 'routing';
  constructor(private cs:CovidService){}
  ngOnInit(){
    this.cs.getCases().subscribe(data=>{
      this.cases.push(data);
      console.log(this.cases)})
  }
  
}
