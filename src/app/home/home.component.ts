import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(){}

  show=false

  close(){
    this.show = false;
  }

  ngOnInit() {
    this.show = true;
  }

}
