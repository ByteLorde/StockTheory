// tslint:disable:variable-name

import {Component, Input, OnInit} from '@angular/core';
import {CardMenuItem} from '../../stock-card-menu-item/MenuItem.model';
import {MembersService} from '../../../../../services/members/members.service';
import {Member, MemberGroup} from '../../../../../model/Member.model';
import {CardService} from '../../../../../services/card/card.service';
import {forkJoin, Observable} from 'rxjs';

@Component({
    selector: 'app-members-menu-item',
    templateUrl: './members-menu-item.component.html',
    styleUrls: ['./members-menu-item.component.styl']
})
export class MembersMenuItemComponent implements OnInit, CardMenuItem {

    disabled: boolean;
    icon: string;
    iconPosition: 'left' | 'right';
    label: string;

    searchCriteria: string;

    @Input()
    group: MemberGroup;

    constructor(private memberService: MembersService,
                private cardService: CardService) {

    }

    ngOnInit() {
        this.icon = 'pi-users';
        this.iconPosition = 'left';
        this.label = this.group.name;
        this.disabled = this.group.members.length === 0;

        this.searchCriteria = '';
    }

    get filteredList(): Member[] {
        if (!this.searchCriteria) {
            return this.group ? this.group.members : [];
        }
        const query = this.searchCriteria.toLowerCase();
        return this.group.members.filter(member => {
            const firstName = member.firstName || '';
            const lastName = member.lastName || '';
            const username = member.username || '';
            const email = member.email || '';

            return firstName.toLowerCase().includes(query) ||
                   lastName.toLowerCase().includes(query) ||
                   username.toLowerCase().includes(query) ||
                   email.toLowerCase().includes(query);
        });
    }

    get cardMembers(): Observable<Member[]> {
        return this.memberService.fetchMembersForCard('');
    }

    toggleMember(member: Member) {
        this.cardMembers.toPromise().then( (members: Member[]) => {
            if (members.includes(member)) {
                this.removeMemberFromCard(member);
            } else {
                this.addMemberToCard(member);
            }
        });
    }

    addMemberToCard(member: Member) {
        this.cardService.addMember(member, '');
    }

    removeMemberFromCard(member: Member) {
        this.cardService.removeMember(member, '');
    }
}

