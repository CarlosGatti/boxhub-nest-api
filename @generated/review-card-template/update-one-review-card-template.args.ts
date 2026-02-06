import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardTemplateUpdateInput } from './review-card-template-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ReviewCardTemplateWhereUniqueInput } from './review-card-template-where-unique.input';

@ArgsType()
export class UpdateOneReviewCardTemplateArgs {

    @Field(() => ReviewCardTemplateUpdateInput, {nullable:false})
    @Type(() => ReviewCardTemplateUpdateInput)
    data!: ReviewCardTemplateUpdateInput;

    @Field(() => ReviewCardTemplateWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardTemplateWhereUniqueInput, 'id' | 'key'>;
}
