import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedLeadNotificationStatus } from './defined-lead-notification-status.enum';

@InputType()
export class EnumDefinedLeadNotificationStatusFieldUpdateOperationsInput {

    @Field(() => DefinedLeadNotificationStatus, {nullable:true})
    set?: keyof typeof DefinedLeadNotificationStatus;
}
