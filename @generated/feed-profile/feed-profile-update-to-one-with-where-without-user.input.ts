import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedProfileWhereInput } from './feed-profile-where.input';
import { Type } from 'class-transformer';
import { FeedProfileUpdateWithoutUserInput } from './feed-profile-update-without-user.input';

@InputType()
export class FeedProfileUpdateToOneWithWhereWithoutUserInput {

    @Field(() => FeedProfileWhereInput, {nullable:true})
    @Type(() => FeedProfileWhereInput)
    where?: FeedProfileWhereInput;

    @Field(() => FeedProfileUpdateWithoutUserInput, {nullable:false})
    @Type(() => FeedProfileUpdateWithoutUserInput)
    data!: FeedProfileUpdateWithoutUserInput;
}
