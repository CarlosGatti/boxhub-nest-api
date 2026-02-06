import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateManyTemplateInput } from './review-card-project-create-many-template.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCardProjectCreateManyTemplateInputEnvelope {

    @Field(() => [ReviewCardProjectCreateManyTemplateInput], {nullable:false})
    @Type(() => ReviewCardProjectCreateManyTemplateInput)
    data!: Array<ReviewCardProjectCreateManyTemplateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
