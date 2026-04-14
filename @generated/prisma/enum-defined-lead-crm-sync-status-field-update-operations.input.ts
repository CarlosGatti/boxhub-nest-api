import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedLeadCrmSyncStatus } from './defined-lead-crm-sync-status.enum';

@InputType()
export class EnumDefinedLeadCrmSyncStatusFieldUpdateOperationsInput {

    @Field(() => DefinedLeadCrmSyncStatus, {nullable:true})
    set?: keyof typeof DefinedLeadCrmSyncStatus;
}
