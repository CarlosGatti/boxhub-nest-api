import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMemberRole } from './event-member-role.enum';
import { NestedEnumEventMemberRoleFilter } from './nested-enum-event-member-role-filter.input';

@InputType()
export class EnumEventMemberRoleFilter {

    @Field(() => EventMemberRole, {nullable:true})
    equals?: keyof typeof EventMemberRole;

    @Field(() => [EventMemberRole], {nullable:true})
    in?: Array<keyof typeof EventMemberRole>;

    @Field(() => [EventMemberRole], {nullable:true})
    notIn?: Array<keyof typeof EventMemberRole>;

    @Field(() => NestedEnumEventMemberRoleFilter, {nullable:true})
    not?: NestedEnumEventMemberRoleFilter;
}
