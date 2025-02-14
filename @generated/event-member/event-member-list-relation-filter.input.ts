import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventMemberWhereInput } from './event-member-where.input';

@InputType()
export class EventMemberListRelationFilter {

    @Field(() => EventMemberWhereInput, {nullable:true})
    every?: EventMemberWhereInput;

    @Field(() => EventMemberWhereInput, {nullable:true})
    some?: EventMemberWhereInput;

    @Field(() => EventMemberWhereInput, {nullable:true})
    none?: EventMemberWhereInput;
}
