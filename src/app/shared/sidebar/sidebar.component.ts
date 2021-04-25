import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  public mobileQuery: MediaQueryList;
  public menuItems: any[];
  private _mobileQueryListener: () => void;
  public fillerNav = [
    'Compras'
  ];

  public fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  constructor( private sidebarService: SidebarService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.menuItems = sidebarService.menu;
    console.log(this.menuItems);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  ngOnInit(): void {
  }

}
