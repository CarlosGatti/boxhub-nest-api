import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedCollectionScalarWhereInput } from './feed-collection-scalar-where.input';
import { Type } from 'class-transformer';
import { FeedCollectionUpdateManyMutationInput } from './feed-collection-update-many-mutation.input';

@InputType()
export class FeedCollectionUpdateManyWithWhereWithoutProfileInput {

    @Field(() => FeedCollectionScalarWhereInput, {nullable:false})
    @Type(() => FeedCollectionScalarWhereInput)
    where!: FeedCollectionScalarWhereInput;

    @Field(() => FeedCollectionUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedCollectionUpdateManyMutationInput)
    data!: FeedCollectionUpdateManyMutationInput;
}
