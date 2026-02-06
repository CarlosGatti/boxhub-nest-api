import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectUpdateWithoutTemplateInput } from './review-card-project-update-without-template.input';

@InputType()
export class ReviewCardProjectUpdateWithWhereUniqueWithoutTemplateInput {

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectUpdateWithoutTemplateInput, {nullable:false})
    @Type(() => ReviewCardProjectUpdateWithoutTemplateInput)
    data!: ReviewCardProjectUpdateWithoutTemplateInput;
}
