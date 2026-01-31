import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedProfileWhereInput } from './feed-profile-where.input';

@InputType()
export class FeedProfileNullableRelationFilter {

    @Field(() => FeedProfileWhereInput, {nullable:true})
    is?: FeedProfileWhereInput;

    @Field(() => FeedProfileWhereInput, {nullable:true})
    isNot?: FeedProfileWhereInput;
}
