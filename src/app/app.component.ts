import { Component } from '@angular/core';
import { ShoppinglistService } from './services/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppinglistService]
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
