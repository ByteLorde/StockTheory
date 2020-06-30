export class Member {
    avatar: any;
    firstName: string;
    lastName: string;
    username: string;
    email: string;

    constructor(firstName?, lastName?, username?, email?) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
    }
}

export class MemberGroup {
    groupId: string;
    name: string;
    members: Member[];

    constructor(groupName?, members?) {
        this.name = groupName;
        this.members = members;
        this.members = [];
    }

    addMember(member: Member) {
        this.members.push(member);
    }
}
