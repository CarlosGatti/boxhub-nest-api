import { registerEnumType } from '@nestjs/graphql';

export enum ReviewCardLinkMode {
    DIRECT = "DIRECT",
    REDIRECT = "REDIRECT"
}


registerEnumType(ReviewCardLinkMode, { name: 'ReviewCardLinkMode', description: undefined })
