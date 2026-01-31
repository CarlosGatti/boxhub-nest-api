import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedProfileUpdateWithoutUserInput } from './feed-profile-update-without-user.input';
import { Type } from 'class-transformer';
import { FeedProfileCreateWithoutUserInput } from './feed-profile-create-without-user.input';
import { FeedProfileWhereInput } from './feed-profile-where.input';

@InputType()
export class FeedProfileUpsertWithoutUserInput {

    @Field(() => FeedProfileUpdateWithoutUserInput, {nullable:false})
    @Type(() => FeedProfileUpdateWithoutUserInput)
    update!: FeedProfileUpdateWithoutUserInput;

    @Field(() => FeedProfileCreateWithoutUserInput, {nullable:false})
    @Type(() => FeedProfileCreateWithoutUserInput)
    create!: FeedProfileCreateWithoutUserInput;

    @Field(() => FeedProfileWhereInput, {nullable:true})
    @Type(() => FeedProfileWhereInput)
    where?: FeedProfileWhereInput;
}
