import {Injectable} from '@angular/core';
import {Member, MemberGroup} from '../../model/Member.model';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MembersService {

    mockGroups: MemberGroup[];

    mockMembers: any[] = [
        {
            firstName: 'Claudell',
            lastName: 'Aldersea',
            username: 'caldersea0'
        }, {
            firstName: 'Chrissie',
            lastName: 'Filchagin',
            username: null
        }, {
            firstName: 'Shaylah',
            lastName: 'Bullene',
            username: 'sbullene2'
        }, {
            firstName: 'Dorothy',
            lastName: 'Snowdon',
            username: 'dsnowdon3'
        }, {
            firstName: 'Halsey',
            lastName: 'Fooks',
            username: null
        }, {
            firstName: 'Maddie',
            lastName: 'Lassen',
            username: 'mlassen5'
        }, {
            firstName: 'Marne',
            lastName: 'Frandsen',
            username: 'mfrandsen6'
        }, {
            firstName: 'Maritsa',
            lastName: 'Picknett',
            username: null
        }, {
            firstName: 'Anestassia',
            lastName: 'Sizey',
            username: 'asizey8'
        }, {
            firstName: 'Rachael',
            lastName: 'Preddy',
            username: null
        }, {
            firstName: 'Gena',
            lastName: 'Deek',
            username: 'gdeeka'
        }, {
            firstName: 'Edith',
            lastName: 'Jobin',
            username: 'ejobinb'
        }, {
            firstName: 'Everard',
            lastName: 'Bertrand',
            username: null
        }, {
            firstName: 'Crosby',
            lastName: 'Blayney',
            username: 'cblayneyd'
        }, {
            firstName: 'Ephrayim',
            lastName: 'Goldby',
            username: 'egoldbye'
        }, {
            firstName: 'Roth',
            lastName: 'Hailes',
            username: 'rhailesf'
        }, {
            firstName: 'Ramon',
            lastName: 'Belloch',
            username: 'rbellochg'
        }, {
            firstName: 'Cass',
            lastName: 'Pirrey',
            username: 'cpirreyh'
        }, {
            firstName: 'Lillian',
            lastName: 'Muzzini',
            username: 'lmuzzinii'
        }, {
            firstName: 'Gilburt',
            lastName: 'Slogrove',
            username: 'gslogrovej'
        }
    ];

    mockMembersForCard: Member[];

    constructor() {
        const group1 = new MemberGroup('Friends');
        const group2 = new MemberGroup('Free');
        const group3 = new MemberGroup('Premium Group 1');
        for (let i = 0; i < this.mockMembers.length; i++) {
            const member = this.mockMembers[i];

            if (i < 7) {
                group1.addMember(member);
            } else {
                group2.addMember(member);
            }
        }

        this.mockGroups = [group1, group2, group3];
        this.mockMembersForCard = [];
    }

    fetchMemberGroups(): Observable<MemberGroup[]> {
        return of(this.mockGroups);
    }

    fetchMembersList(): Observable<Member[]> {
      return of(this.mockMembers);
    }

    fetchMembersForCard(cardId: string) {
        return of(this.mockMembersForCard);
    }

    addMemberToCard(member: Member, cardId: string) {
        this.mockMembersForCard.push(member);
    }

    removeMemberFromCard(member: Member, cardId: string) {
        const index = this.mockMembersForCard.indexOf(member);
        this.mockMembersForCard.splice(index, 1);
    }
}
