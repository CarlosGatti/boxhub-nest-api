import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedLeadNotificationStatus } from './defined-lead-notification-status.enum';
import { NestedEnumDefinedLeadNotificationStatusWithAggregatesFilter } from './nested-enum-defined-lead-notification-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedLeadNotificationStatusFilter } from './nested-enum-defined-lead-notification-status-filter.input';

@InputType()
export class EnumDefinedLeadNotificationStatusWithAggregatesFilter {

    @Field(() => DefinedLeadNotificationStatus, {nullable:true})
    equals?: keyof typeof DefinedLeadNotificationStatus;

    @Field(() => [DefinedLeadNotificationStatus], {nullable:true})
    in?: Array<keyof typeof DefinedLeadNotificationStatus>;

    @Field(() => [DefinedLeadNotificationStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedLeadNotificationStatus>;

    @Field(() => NestedEnumDefinedLeadNotificationStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedLeadNotificationStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedLeadNotificationStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedLeadNotificationStatusFilter;

    @Field(() => NestedEnumDefinedLeadNotificationStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedLeadNotificationStatusFilter;
}
