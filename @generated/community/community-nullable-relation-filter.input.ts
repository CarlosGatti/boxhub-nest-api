import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityWhereInput } from './community-where.input';

@InputType()
export class CommunityNullableRelationFilter {

    @Field(() => CommunityWhereInput, {nullable:true})
    is?: CommunityWhereInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    isNot?: CommunityWhereInput;
}
