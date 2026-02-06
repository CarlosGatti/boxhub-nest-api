import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourcePreferenceScalarWhereInput } from './feed-source-preference-scalar-where.input';
import { Type } from 'class-transformer';
import { FeedSourcePreferenceUpdateManyMutationInput } from './feed-source-preference-update-many-mutation.input';

@InputType()
export class FeedSourcePreferenceUpdateManyWithWhereWithoutUserInput {

    @Field(() => FeedSourcePreferenceScalarWhereInput, {nullable:false})
    @Type(() => FeedSourcePreferenceScalarWhereInput)
    where!: FeedSourcePreferenceScalarWhereInput;

    @Field(() => FeedSourcePreferenceUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedSourcePreferenceUpdateManyMutationInput)
    data!: FeedSourcePreferenceUpdateManyMutationInput;
}
