import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardTemplateWhereInput } from './review-card-template-where.input';
import { Type } from 'class-transformer';
import { ReviewCardTemplateUpdateWithoutProjectsInput } from './review-card-template-update-without-projects.input';

@InputType()
export class ReviewCardTemplateUpdateToOneWithWhereWithoutProjectsInput {

    @Field(() => ReviewCardTemplateWhereInput, {nullable:true})
    @Type(() => ReviewCardTemplateWhereInput)
    where?: ReviewCardTemplateWhereInput;

    @Field(() => ReviewCardTemplateUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => ReviewCardTemplateUpdateWithoutProjectsInput)
    data!: ReviewCardTemplateUpdateWithoutProjectsInput;
}
