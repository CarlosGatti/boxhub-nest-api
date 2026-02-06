import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardTemplateWhereUniqueInput } from './review-card-template-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardTemplateCreateWithoutProjectsInput } from './review-card-template-create-without-projects.input';

@InputType()
export class ReviewCardTemplateCreateOrConnectWithoutProjectsInput {

    @Field(() => ReviewCardTemplateWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardTemplateWhereUniqueInput, 'id' | 'key'>;

    @Field(() => ReviewCardTemplateCreateWithoutProjectsInput, {nullable:false})
    @Type(() => ReviewCardTemplateCreateWithoutProjectsInput)
    create!: ReviewCardTemplateCreateWithoutProjectsInput;
}
