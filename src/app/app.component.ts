import { Component, OnInit } from '@angular/core';
import { LABEL } from './label.constant';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'extensiveChart';
  Label = {
    MY_BALANCE: LABEL.MY_BALANCE,
    TAB_PRICE: LABEL.TAB_PRICE,
    SPENDING: LABEL.SPENDING,
    MON: LABEL.MON,
    TUE: LABEL.TUE,
    WED: LABEL.WED,
    THU: LABEL.THU,
    FRI: LABEL.FRI,
    SAT: LABEL.SAT,
    SUN: LABEL.SUN,
    TOTAL_THIS_MONTH: LABEL.TOTAL_THIS_MONTH,
    TOTAL: LABEL.TOTAL,
    PERCENT: LABEL.PERCENT,
    LAST_MONTH: LABEL.LAST_MONTH,
  };

  isDesktopView!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isDesktopView = !result.matches;
        console.log(this.isDesktopView);
      });
  }
}
