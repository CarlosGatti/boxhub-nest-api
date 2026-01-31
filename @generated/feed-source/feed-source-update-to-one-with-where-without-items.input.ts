import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceWhereInput } from './feed-source-where.input';
import { Type } from 'class-transformer';
import { FeedSourceUpdateWithoutItemsInput } from './feed-source-update-without-items.input';

@InputType()
export class FeedSourceUpdateToOneWithWhereWithoutItemsInput {

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;

    @Field(() => FeedSourceUpdateWithoutItemsInput, {nullable:false})
    @Type(() => FeedSourceUpdateWithoutItemsInput)
    data!: FeedSourceUpdateWithoutItemsInput;
}
