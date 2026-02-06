import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardBusinessScalarWhereInput } from './review-card-business-scalar-where.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessUpdateManyMutationInput } from './review-card-business-update-many-mutation.input';

@InputType()
export class ReviewCardBusinessUpdateManyWithWhereWithoutUserInput {

    @Field(() => ReviewCardBusinessScalarWhereInput, {nullable:false})
    @Type(() => ReviewCardBusinessScalarWhereInput)
    where!: ReviewCardBusinessScalarWhereInput;

    @Field(() => ReviewCardBusinessUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCardBusinessUpdateManyMutationInput)
    data!: ReviewCardBusinessUpdateManyMutationInput;
}
