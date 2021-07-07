import { Component, OnInit } from '@angular/core';

import { adminMenuItems } from './sidebar-admin-menu';

@Component({
  selector: 'ngx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  menu = adminMenuItems;

  constructor() {}

  ngOnInit(): void {}
}
