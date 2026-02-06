import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourcePreferenceCreateManySourceInput } from './feed-source-preference-create-many-source.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedSourcePreferenceCreateManySourceInputEnvelope {

    @Field(() => [FeedSourcePreferenceCreateManySourceInput], {nullable:false})
    @Type(() => FeedSourcePreferenceCreateManySourceInput)
    data!: Array<FeedSourcePreferenceCreateManySourceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
