import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedLeadNotificationStatus } from './defined-lead-notification-status.enum';
import { NestedEnumDefinedLeadNotificationStatusFilter } from './nested-enum-defined-lead-notification-status-filter.input';

@InputType()
export class EnumDefinedLeadNotificationStatusFilter {

    @Field(() => DefinedLeadNotificationStatus, {nullable:true})
    equals?: keyof typeof DefinedLeadNotificationStatus;

    @Field(() => [DefinedLeadNotificationStatus], {nullable:true})
    in?: Array<keyof typeof DefinedLeadNotificationStatus>;

    @Field(() => [DefinedLeadNotificationStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedLeadNotificationStatus>;

    @Field(() => NestedEnumDefinedLeadNotificationStatusFilter, {nullable:true})
    not?: NestedEnumDefinedLeadNotificationStatusFilter;
}
