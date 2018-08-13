import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  inp="";
  result1="";

  onclick(value:any){
    console.log(value);

    this.inp= this.inp + value;
  }

  result(){
    this.result1=eval(this.inp)
    this.inp=this.result1;
  }
  clear(){
    this.inp= '0';
  }

  constructor() { }

  ngOnInit() {
  }

}
