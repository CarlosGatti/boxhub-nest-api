import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardTemplateWhereUniqueInput } from './review-card-template-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueReviewCardTemplateOrThrowArgs {

    @Field(() => ReviewCardTemplateWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardTemplateWhereUniqueInput, 'id' | 'key'>;
}
