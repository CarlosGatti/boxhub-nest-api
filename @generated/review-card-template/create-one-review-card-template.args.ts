import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardTemplateCreateInput } from './review-card-template-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReviewCardTemplateArgs {

    @Field(() => ReviewCardTemplateCreateInput, {nullable:false})
    @Type(() => ReviewCardTemplateCreateInput)
    data!: ReviewCardTemplateCreateInput;
}
