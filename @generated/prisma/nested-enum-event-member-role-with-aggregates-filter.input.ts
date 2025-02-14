import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMemberRole } from './event-member-role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEventMemberRoleFilter } from './nested-enum-event-member-role-filter.input';

@InputType()
export class NestedEnumEventMemberRoleWithAggregatesFilter {

    @Field(() => EventMemberRole, {nullable:true})
    equals?: keyof typeof EventMemberRole;

    @Field(() => [EventMemberRole], {nullable:true})
    in?: Array<keyof typeof EventMemberRole>;

    @Field(() => [EventMemberRole], {nullable:true})
    notIn?: Array<keyof typeof EventMemberRole>;

    @Field(() => NestedEnumEventMemberRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEventMemberRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEventMemberRoleFilter, {nullable:true})
    _min?: NestedEnumEventMemberRoleFilter;

    @Field(() => NestedEnumEventMemberRoleFilter, {nullable:true})
    _max?: NestedEnumEventMemberRoleFilter;
}
