import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedProfileUpdateWithoutCollectionsInput } from './feed-profile-update-without-collections.input';
import { Type } from 'class-transformer';
import { FeedProfileCreateWithoutCollectionsInput } from './feed-profile-create-without-collections.input';
import { FeedProfileWhereInput } from './feed-profile-where.input';

@InputType()
export class FeedProfileUpsertWithoutCollectionsInput {

    @Field(() => FeedProfileUpdateWithoutCollectionsInput, {nullable:false})
    @Type(() => FeedProfileUpdateWithoutCollectionsInput)
    update!: FeedProfileUpdateWithoutCollectionsInput;

    @Field(() => FeedProfileCreateWithoutCollectionsInput, {nullable:false})
    @Type(() => FeedProfileCreateWithoutCollectionsInput)
    create!: FeedProfileCreateWithoutCollectionsInput;

    @Field(() => FeedProfileWhereInput, {nullable:true})
    @Type(() => FeedProfileWhereInput)
    where?: FeedProfileWhereInput;
}
