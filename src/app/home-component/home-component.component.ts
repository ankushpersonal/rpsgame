import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  showHelpText:boolean= false;
  hideHelpText:boolean = true;

  viewHelp(){
    this.showHelpText = true;
    this.hideHelpText = false;
  }

  hideHelp(){
    this.hideHelpText = true;
    this.showHelpText = false;
  }

  ngOnInit() {
  }

}
