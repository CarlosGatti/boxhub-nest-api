import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardTemplateWhereUniqueInput } from './review-card-template-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardTemplateCreateInput } from './review-card-template-create.input';
import { ReviewCardTemplateUpdateInput } from './review-card-template-update.input';

@ArgsType()
export class UpsertOneReviewCardTemplateArgs {

    @Field(() => ReviewCardTemplateWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardTemplateWhereUniqueInput, 'id' | 'key'>;

    @Field(() => ReviewCardTemplateCreateInput, {nullable:false})
    @Type(() => ReviewCardTemplateCreateInput)
    create!: ReviewCardTemplateCreateInput;

    @Field(() => ReviewCardTemplateUpdateInput, {nullable:false})
    @Type(() => ReviewCardTemplateUpdateInput)
    update!: ReviewCardTemplateUpdateInput;
}
