import { registerEnumType } from '@nestjs/graphql';

export enum DefinedClientType {
    COMPANY = "COMPANY",
    INDIVIDUAL = "INDIVIDUAL"
}


registerEnumType(DefinedClientType, { name: 'DefinedClientType', description: undefined })
