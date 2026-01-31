import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemCreateManySourceInput } from './feed-item-create-many-source.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedItemCreateManySourceInputEnvelope {

    @Field(() => [FeedItemCreateManySourceInput], {nullable:false})
    @Type(() => FeedItemCreateManySourceInput)
    data!: Array<FeedItemCreateManySourceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
