import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  sideNav:boolean = false;
  hasScrolled = false;


  @HostListener("document:scroll")
  navBgChange(){
    document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ? this.hasScrolled = true : this.hasScrolled = false;
  }
  ngOnInit(): void {
  }

  toogleSideNav() {
    this.sideNav = !this.sideNav;
  }

}
