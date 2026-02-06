import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourcePreferenceCreateManyUserInput } from './feed-source-preference-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedSourcePreferenceCreateManyUserInputEnvelope {

    @Field(() => [FeedSourcePreferenceCreateManyUserInput], {nullable:false})
    @Type(() => FeedSourcePreferenceCreateManyUserInput)
    data!: Array<FeedSourcePreferenceCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
