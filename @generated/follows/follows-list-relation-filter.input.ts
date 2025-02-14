import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowsWhereInput } from './follows-where.input';

@InputType()
export class FollowsListRelationFilter {

    @Field(() => FollowsWhereInput, {nullable:true})
    every?: FollowsWhereInput;

    @Field(() => FollowsWhereInput, {nullable:true})
    some?: FollowsWhereInput;

    @Field(() => FollowsWhereInput, {nullable:true})
    none?: FollowsWhereInput;
}
