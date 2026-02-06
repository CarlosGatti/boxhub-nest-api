import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardTemplateCreateManyInput } from './review-card-template-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReviewCardTemplateArgs {

    @Field(() => [ReviewCardTemplateCreateManyInput], {nullable:false})
    @Type(() => ReviewCardTemplateCreateManyInput)
    data!: Array<ReviewCardTemplateCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
