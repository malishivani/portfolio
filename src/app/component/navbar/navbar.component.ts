import { Component } from '@angular/core';

import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public theme:ThemeService){}

toggleTheme(){

this.theme.toggleTheme();

}
}
