import {Component, Input, OnInit} from '@angular/core';
import {MemberGroup} from '../../../model/Member.model';
import {MembersService} from '../../../services/members/members.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.styl']
})
export class CardMenuComponent implements OnInit {

  @Input()
  cardId: string;

  constructor(private memberService: MembersService) { }

  ngOnInit() {
  }

  get memberGroups(): Observable<MemberGroup[]> {
    return this.memberService.fetchMemberGroups();
  }

}
