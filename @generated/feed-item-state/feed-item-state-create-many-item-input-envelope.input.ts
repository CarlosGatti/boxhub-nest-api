import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemStateCreateManyItemInput } from './feed-item-state-create-many-item.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedItemStateCreateManyItemInputEnvelope {

    @Field(() => [FeedItemStateCreateManyItemInput], {nullable:false})
    @Type(() => FeedItemStateCreateManyItemInput)
    data!: Array<FeedItemStateCreateManyItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
