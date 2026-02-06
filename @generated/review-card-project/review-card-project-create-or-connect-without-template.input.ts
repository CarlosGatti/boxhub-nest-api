import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateWithoutTemplateInput } from './review-card-project-create-without-template.input';

@InputType()
export class ReviewCardProjectCreateOrConnectWithoutTemplateInput {

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectCreateWithoutTemplateInput, {nullable:false})
    @Type(() => ReviewCardProjectCreateWithoutTemplateInput)
    create!: ReviewCardProjectCreateWithoutTemplateInput;
}
