import {Component, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {PortalDivComponent} from '../portal-div/portal-div.component';
import {MoodBarService} from '../mood-bar/mood-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

    @ViewChild('portalDivComponent', {static: false})
    portalDivComponent: PortalDivComponent;

    parentRoute: string;

  mockSuggestions = [
      'something',
      'else'
  ];

  parentIconMap = {
      news: 'pi-globe',
      portfolio: 'pi-home',
      market: 'pi-chart-line',
      activity: 'pi-users'
  };

  constructor(private router: Router,
              private moodbarService: MoodBarService) {

  }

  ngOnInit() {
      this.router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              this.portalDivComponent.triggerAnimation(300);
          }
          if (event instanceof NavigationEnd) {
              setTimeout(() => {
                  this.parentRoute = this.router.url.replace('/', '');
              }, 300);
              this.portalDivComponent.triggerAnimation(300);
          }
      });
  }

  getBackgroundGradient() {

      const color = this.moodbarService.moodbarColor;
      // Fade over the entire image - not great.
      return 'linear-gradient(rgba(0, 0, 0, 0.0) 0%, rgba(255, 0, 0, 1.0) 100%)';
  }

  get parentRouteIcon() {
      if (!this.parentRoute) {
          return;
      }
     return this.parentIconMap[this.parentRoute.toLowerCase()];
  }
}
