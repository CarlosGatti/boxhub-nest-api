import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardBusinessUpdateManyMutationInput } from './review-card-business-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessWhereInput } from './review-card-business-where.input';

@ArgsType()
export class UpdateManyReviewCardBusinessArgs {

    @Field(() => ReviewCardBusinessUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCardBusinessUpdateManyMutationInput)
    data!: ReviewCardBusinessUpdateManyMutationInput;

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    @Type(() => ReviewCardBusinessWhereInput)
    where?: ReviewCardBusinessWhereInput;
}
