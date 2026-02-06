import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardProjectCreateInput } from './review-card-project-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReviewCardProjectArgs {

    @Field(() => ReviewCardProjectCreateInput, {nullable:false})
    @Type(() => ReviewCardProjectCreateInput)
    data!: ReviewCardProjectCreateInput;
}
