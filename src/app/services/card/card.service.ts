import { Injectable } from '@angular/core';
import {MembersService} from '../members/members.service';
import {Member} from '../../model/Member.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private memberService: MembersService) {

  }

  addMember(member: Member, cardId: string) {
    this.memberService.addMemberToCard(member, cardId);
  }

  removeMember(member: Member, cardId: string) {
    this.memberService.removeMemberFromCard(member, cardId);
  }

}
