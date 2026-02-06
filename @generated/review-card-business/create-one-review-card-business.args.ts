import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardBusinessCreateInput } from './review-card-business-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReviewCardBusinessArgs {

    @Field(() => ReviewCardBusinessCreateInput, {nullable:false})
    @Type(() => ReviewCardBusinessCreateInput)
    data!: ReviewCardBusinessCreateInput;
}
