import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild('drawer') public sideNav: MatSidenav;
  sidenavPosition = 'start';
  sidenavMode = 'side';
  sidenavDisabled = false;
  hasback  = false;
  sideNavOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

}
