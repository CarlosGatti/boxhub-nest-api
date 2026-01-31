import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceScalarWhereInput } from './feed-source-scalar-where.input';
import { Type } from 'class-transformer';
import { FeedSourceUpdateManyMutationInput } from './feed-source-update-many-mutation.input';

@InputType()
export class FeedSourceUpdateManyWithWhereWithoutCollectionInput {

    @Field(() => FeedSourceScalarWhereInput, {nullable:false})
    @Type(() => FeedSourceScalarWhereInput)
    where!: FeedSourceScalarWhereInput;

    @Field(() => FeedSourceUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedSourceUpdateManyMutationInput)
    data!: FeedSourceUpdateManyMutationInput;
}
