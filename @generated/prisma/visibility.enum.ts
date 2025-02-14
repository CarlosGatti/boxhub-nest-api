import { registerEnumType } from '@nestjs/graphql';

export enum Visibility {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE"
}


registerEnumType(Visibility, { name: 'Visibility', description: undefined })
