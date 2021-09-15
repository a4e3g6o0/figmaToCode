import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-menu',
  templateUrl: './landing-menu.component.html',
  styleUrls: ['./landing-menu.component.css'],
})
export class LandingMenuComponent implements OnInit {
  items = ['Home', 'My stats', 'Members', 'Settings', 'Help'];
  shouldShowMenu = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.shouldShowMenu = event.target.innerWidth > 768;
  }
}
