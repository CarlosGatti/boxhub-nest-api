import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedSourcePreferenceCreateManyInput } from './feed-source-preference-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFeedSourcePreferenceArgs {

    @Field(() => [FeedSourcePreferenceCreateManyInput], {nullable:false})
    @Type(() => FeedSourcePreferenceCreateManyInput)
    data!: Array<FeedSourcePreferenceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
