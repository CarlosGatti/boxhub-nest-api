import { registerEnumType } from '@nestjs/graphql';

export enum MembershipStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    DECLINED = "DECLINED",
    CANCELED = "CANCELED"
}


registerEnumType(MembershipStatus, { name: 'MembershipStatus', description: undefined })
