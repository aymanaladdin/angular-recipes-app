import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  showDropdown: boolean;
  
  constructor(private authService: AuthService) { 
    this.showDropdown = false;
  }

  ngOnInit() {
  }

  onLogOut(){
    this.authService.logOut()
  }

  isAuthenticated() {
    return this.authService.isAuth()
  }
}
