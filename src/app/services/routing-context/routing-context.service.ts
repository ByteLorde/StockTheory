import { Injectable } from '@angular/core';
import {RoutingContextLink} from './RoutingContext';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingContextService {

  routingContext: BehaviorSubject<RoutingContextLink[]> = new BehaviorSubject<RoutingContextLink[]>([]);

  constructor(private router: Router) { }

  setRoutingContext(routingContext: RoutingContextLink[]) {
    this.routingContext.next(routingContext);
  }

  getActiveLink(): RoutingContextLink {
    const context: RoutingContextLink[] = this.getRoutingContext();
    context.forEach( (link: RoutingContextLink) => {
      if (this.isLinkActive(link)) {
        return link;
      }
    });
    return null;
  }

  getSecondaryLinks(): RoutingContextLink[] {
    const activeLink = this.getActiveLink() || {};
    return activeLink.children;
  }

  getActiveSecondaryLink(): RoutingContextLink {
    const secondaryLinks = this.getSecondaryLinks();
    secondaryLinks.forEach(link => {
      if (this.isLinkActive(link)) {
        return link;
      }
    });
    return null;
  }

  isLinkActive(link: RoutingContextLink) {
    const currentUrl = this.router.url;
    return currentUrl.includes(link.url);
  }

  getRoutingContext(): RoutingContextLink[] {
    return this.routingContext.getValue();
  }

  observeRoutingContext(): Observable<RoutingContextLink[]> {
    return this.routingContext.asObservable();
  }
}

