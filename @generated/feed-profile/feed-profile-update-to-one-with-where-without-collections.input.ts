import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedProfileWhereInput } from './feed-profile-where.input';
import { Type } from 'class-transformer';
import { FeedProfileUpdateWithoutCollectionsInput } from './feed-profile-update-without-collections.input';

@InputType()
export class FeedProfileUpdateToOneWithWhereWithoutCollectionsInput {

    @Field(() => FeedProfileWhereInput, {nullable:true})
    @Type(() => FeedProfileWhereInput)
    where?: FeedProfileWhereInput;

    @Field(() => FeedProfileUpdateWithoutCollectionsInput, {nullable:false})
    @Type(() => FeedProfileUpdateWithoutCollectionsInput)
    data!: FeedProfileUpdateWithoutCollectionsInput;
}
