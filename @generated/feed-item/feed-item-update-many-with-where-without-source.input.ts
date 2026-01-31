import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemScalarWhereInput } from './feed-item-scalar-where.input';
import { Type } from 'class-transformer';
import { FeedItemUpdateManyMutationInput } from './feed-item-update-many-mutation.input';

@InputType()
export class FeedItemUpdateManyWithWhereWithoutSourceInput {

    @Field(() => FeedItemScalarWhereInput, {nullable:false})
    @Type(() => FeedItemScalarWhereInput)
    where!: FeedItemScalarWhereInput;

    @Field(() => FeedItemUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedItemUpdateManyMutationInput)
    data!: FeedItemUpdateManyMutationInput;
}
