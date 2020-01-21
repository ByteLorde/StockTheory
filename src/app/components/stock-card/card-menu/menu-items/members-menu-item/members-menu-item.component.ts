// tslint:disable:variable-name

import {Component, OnInit} from '@angular/core';
import {CardMenuItem} from '../../stock-card-menu-item/MenuItem.model';
import {MembersService} from '../../../../../services/members/members.service';
import {Member, MemberGroup} from '../../../../../model/Member.model';
import {CardService} from '../../../../../services/card/card.service';
import {forkJoin} from 'rxjs';

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

    _allMembers: Member[];
    _cardMembers: Member[];
    _memberGroups: MemberGroup[];

    filteredAllMembers: Member[];
    filteredCardMembers: Member[];
    filteredMemberGroups: MemberGroup[];

    constructor(private memberService: MembersService,
                private cardService: CardService) {

    }


    ngOnInit() {
        this.disabled = false;
        this.icon = 'pi-users';
        this.iconPosition = 'left';
        this.label = 'Members';

        this.searchCriteria = '';

        this.updateLists();
    }

    updateLists() {

        const obs = [
            this.memberService.fetchMembersList(),
            this.memberService.fetchMembersForCard(''),
            this.memberService.fetchMemberGroups()
        ];
        forkJoin(obs).subscribe( (response: any[]) => {
            this._allMembers = response[0];
            this._cardMembers = response[1];
            this._memberGroups = response[2];
            this.filteredCardMembers = this._cardMembers.filter((member: Member) => {
                const first = (member.firstName || '').toLowerCase();
                const last = (member.lastName || '').toLowerCase();
                const username = (member.username || '').toLowerCase();

                const criteria = this.searchCriteria.toLowerCase();
                return first.includes(criteria) || last.includes(criteria) || username.includes(criteria);
            });

            this.filteredMemberGroups = this._memberGroups.filter((group: MemberGroup) => {
                const groupName = (group.name || '').toLowerCase();

                const criteria = this.searchCriteria.toLowerCase();

                const nonIncludedMembersFromGroup = group.members.filter( (member) => !this._cardMembers.includes(member) );
                return groupName.includes(criteria) && nonIncludedMembersFromGroup.length > 0;
            });

            this.filteredAllMembers = this._allMembers.filter((member: Member) => {
                const first = (member.firstName || '').toLowerCase();
                const last = (member.lastName || '').toLowerCase();
                const username = (member.username || '').toLowerCase();

                const criteria = this.searchCriteria.toLowerCase();
                return !this._cardMembers.includes(member) &&
                    (first.includes(criteria) || last.includes(criteria) || username.includes(criteria));
            });
        });
    }

    getMembersFromGroup(group: MemberGroup) {
        let memberNames = '';
        group.members.forEach((member: Member) => {
            memberNames += `<strong>${member.firstName} ${member.lastName}</strong><br>`;
        });
        return memberNames;
    }

    addMemberToCard(member: Member) {
        if (this._cardMembers.includes(member)) {
            return;
        }
        this._cardMembers.push(member);
        this.updateLists();
    }

    addGroupToCard(group: MemberGroup) {
        group.members.forEach(member => this.addMemberToCard(member));
        this.updateLists();
    }

    removeMemberFromCard(member: Member) {
        this.cardService.removeMember(member, '');
        this.updateLists();
    }
}

