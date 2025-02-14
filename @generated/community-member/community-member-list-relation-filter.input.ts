import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberWhereInput } from './community-member-where.input';

@InputType()
export class CommunityMemberListRelationFilter {

    @Field(() => CommunityMemberWhereInput, {nullable:true})
    every?: CommunityMemberWhereInput;

    @Field(() => CommunityMemberWhereInput, {nullable:true})
    some?: CommunityMemberWhereInput;

    @Field(() => CommunityMemberWhereInput, {nullable:true})
    none?: CommunityMemberWhereInput;
}
