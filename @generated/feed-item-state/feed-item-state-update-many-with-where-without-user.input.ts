import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemStateScalarWhereInput } from './feed-item-state-scalar-where.input';
import { Type } from 'class-transformer';
import { FeedItemStateUpdateManyMutationInput } from './feed-item-state-update-many-mutation.input';

@InputType()
export class FeedItemStateUpdateManyWithWhereWithoutUserInput {

    @Field(() => FeedItemStateScalarWhereInput, {nullable:false})
    @Type(() => FeedItemStateScalarWhereInput)
    where!: FeedItemStateScalarWhereInput;

    @Field(() => FeedItemStateUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedItemStateUpdateManyMutationInput)
    data!: FeedItemStateUpdateManyMutationInput;
}
