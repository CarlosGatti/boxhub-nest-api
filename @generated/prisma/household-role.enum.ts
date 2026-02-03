import { registerEnumType } from '@nestjs/graphql';

export enum HouseholdRole {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    MEMBER = "MEMBER"
}


registerEnumType(HouseholdRole, { name: 'HouseholdRole', description: undefined })
