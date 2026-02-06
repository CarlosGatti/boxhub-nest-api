import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardTemplateWhereInput } from './review-card-template-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReviewCardTemplateArgs {

    @Field(() => ReviewCardTemplateWhereInput, {nullable:true})
    @Type(() => ReviewCardTemplateWhereInput)
    where?: ReviewCardTemplateWhereInput;
}
