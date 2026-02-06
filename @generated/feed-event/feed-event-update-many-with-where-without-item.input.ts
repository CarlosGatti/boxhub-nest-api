import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventScalarWhereInput } from './feed-event-scalar-where.input';
import { Type } from 'class-transformer';
import { FeedEventUpdateManyMutationInput } from './feed-event-update-many-mutation.input';

@InputType()
export class FeedEventUpdateManyWithWhereWithoutItemInput {

    @Field(() => FeedEventScalarWhereInput, {nullable:false})
    @Type(() => FeedEventScalarWhereInput)
    where!: FeedEventScalarWhereInput;

    @Field(() => FeedEventUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedEventUpdateManyMutationInput)
    data!: FeedEventUpdateManyMutationInput;
}
