import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemWhereInput } from './feed-item-where.input';
import { Type } from 'class-transformer';
import { FeedItemUpdateWithoutStatesInput } from './feed-item-update-without-states.input';

@InputType()
export class FeedItemUpdateToOneWithWhereWithoutStatesInput {

    @Field(() => FeedItemWhereInput, {nullable:true})
    @Type(() => FeedItemWhereInput)
    where?: FeedItemWhereInput;

    @Field(() => FeedItemUpdateWithoutStatesInput, {nullable:false})
    @Type(() => FeedItemUpdateWithoutStatesInput)
    data!: FeedItemUpdateWithoutStatesInput;
}
