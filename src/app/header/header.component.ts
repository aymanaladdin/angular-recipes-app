import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeNav: string;
  
  @Output() navSelector: EventEmitter<string>;

  constructor() { 
    this.navSelector = new EventEmitter<string>();
    this.activeNav = 'recipies';
  }

  ngOnInit() {
  }

  onSelectNav(navName: string) {
    this.navSelector.emit(navName);
    this.activeNav = navName;  
  }

  //If We Need 2 Different functions
  // onRecipiesSelected(){
  //   this.navSelector.emit('recipies');
  //   this.activeNav = 'recipies';
  // }

  // onShoppingListSelected() {
  //   this.navSelector.emit('shopping-list');
  //   this.activeNav = 'shopping-list'
  // }

}
