import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  inp="";
  inp1=1;
  onclick(value:any){
    console.log(value);

    this.inp= this.inp + value;
  }

  result(){
    
  }

  constructor() { }

  ngOnInit() {
  }

}
