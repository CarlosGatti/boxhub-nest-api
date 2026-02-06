import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardTemplateWhereInput } from './review-card-template-where.input';

@InputType()
export class ReviewCardTemplateRelationFilter {

    @Field(() => ReviewCardTemplateWhereInput, {nullable:true})
    is?: ReviewCardTemplateWhereInput;

    @Field(() => ReviewCardTemplateWhereInput, {nullable:true})
    isNot?: ReviewCardTemplateWhereInput;
}
