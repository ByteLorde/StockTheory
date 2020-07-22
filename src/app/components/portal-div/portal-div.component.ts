import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-portal-div',
  templateUrl: './portal-div.component.html',
  styleUrls: ['./portal-div.component.styl']
})
export class PortalDivComponent implements OnInit {

  @Input()
  pipeColor ? = '#222';

  @Input()
  animateLeft ? = true;

  @Input()
  animateRight ? = true;

  @Input()
  portalSpacing ? = 15;

  @ViewChild('portalLeft', { static: false })
  portalLeft: any;

  @ViewChild('portalRight', { static: false })
  portalRight: any;

  collapsed = false;


  constructor() { }

  ngOnInit() {

  }

  triggerAnimation(refreshRate = 1000) {
    this.collapsed = true;
    setTimeout(() => {
      this.collapsed = false;
    }, refreshRate);
  }

}
