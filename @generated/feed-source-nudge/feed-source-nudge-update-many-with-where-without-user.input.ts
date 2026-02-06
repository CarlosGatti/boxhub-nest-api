import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceNudgeScalarWhereInput } from './feed-source-nudge-scalar-where.input';
import { Type } from 'class-transformer';
import { FeedSourceNudgeUpdateManyMutationInput } from './feed-source-nudge-update-many-mutation.input';

@InputType()
export class FeedSourceNudgeUpdateManyWithWhereWithoutUserInput {

    @Field(() => FeedSourceNudgeScalarWhereInput, {nullable:false})
    @Type(() => FeedSourceNudgeScalarWhereInput)
    where!: FeedSourceNudgeScalarWhereInput;

    @Field(() => FeedSourceNudgeUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedSourceNudgeUpdateManyMutationInput)
    data!: FeedSourceNudgeUpdateManyMutationInput;
}
