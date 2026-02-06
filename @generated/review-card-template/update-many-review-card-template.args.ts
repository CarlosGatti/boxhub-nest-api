import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardTemplateUpdateManyMutationInput } from './review-card-template-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReviewCardTemplateWhereInput } from './review-card-template-where.input';

@ArgsType()
export class UpdateManyReviewCardTemplateArgs {

    @Field(() => ReviewCardTemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCardTemplateUpdateManyMutationInput)
    data!: ReviewCardTemplateUpdateManyMutationInput;

    @Field(() => ReviewCardTemplateWhereInput, {nullable:true})
    @Type(() => ReviewCardTemplateWhereInput)
    where?: ReviewCardTemplateWhereInput;
}
