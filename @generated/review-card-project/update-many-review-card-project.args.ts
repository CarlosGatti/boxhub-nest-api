import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardProjectUpdateManyMutationInput } from './review-card-project-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';

@ArgsType()
export class UpdateManyReviewCardProjectArgs {

    @Field(() => ReviewCardProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateManyMutationInput)
    data!: ReviewCardProjectUpdateManyMutationInput;

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    where?: ReviewCardProjectWhereInput;
}
