import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardTemplateUpdateWithoutProjectsInput } from './review-card-template-update-without-projects.input';
import { Type } from 'class-transformer';
import { ReviewCardTemplateCreateWithoutProjectsInput } from './review-card-template-create-without-projects.input';
import { ReviewCardTemplateWhereInput } from './review-card-template-where.input';

@InputType()
export class ReviewCardTemplateUpsertWithoutProjectsInput {

    @Field(() => ReviewCardTemplateUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => ReviewCardTemplateUpdateWithoutProjectsInput)
    update!: ReviewCardTemplateUpdateWithoutProjectsInput;

    @Field(() => ReviewCardTemplateCreateWithoutProjectsInput, {nullable:false})
    @Type(() => ReviewCardTemplateCreateWithoutProjectsInput)
    create!: ReviewCardTemplateCreateWithoutProjectsInput;

    @Field(() => ReviewCardTemplateWhereInput, {nullable:true})
    @Type(() => ReviewCardTemplateWhereInput)
    where?: ReviewCardTemplateWhereInput;
}
