import { registerEnumType } from '@nestjs/graphql';

export enum DefinedIntakeFormStatus {
    DRAFT = "DRAFT",
    SENT = "SENT",
    SUBMITTED = "SUBMITTED",
    REVIEWED = "REVIEWED"
}


registerEnumType(DefinedIntakeFormStatus, { name: 'DefinedIntakeFormStatus', description: undefined })
