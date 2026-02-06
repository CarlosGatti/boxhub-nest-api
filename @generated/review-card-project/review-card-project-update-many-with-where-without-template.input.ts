import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectScalarWhereInput } from './review-card-project-scalar-where.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectUpdateManyMutationInput } from './review-card-project-update-many-mutation.input';

@InputType()
export class ReviewCardProjectUpdateManyWithWhereWithoutTemplateInput {

    @Field(() => ReviewCardProjectScalarWhereInput, {nullable:false})
    @Type(() => ReviewCardProjectScalarWhereInput)
    where!: ReviewCardProjectScalarWhereInput;

    @Field(() => ReviewCardProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateManyMutationInput)
    data!: ReviewCardProjectUpdateManyMutationInput;
}
