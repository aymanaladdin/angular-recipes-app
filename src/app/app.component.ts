import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeTab = '';

  constructor(){
    this.activeTab = 'recipies';
  }

  setNavTab(tab: string){
    this.activeTab = tab;
    //console.log(this.activeTab);
  }

}
