import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardExportUpdateInput } from './review-card-export-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ReviewCardExportWhereUniqueInput } from './review-card-export-where-unique.input';

@ArgsType()
export class UpdateOneReviewCardExportArgs {

    @Field(() => ReviewCardExportUpdateInput, {nullable:false})
    @Type(() => ReviewCardExportUpdateInput)
    data!: ReviewCardExportUpdateInput;

    @Field(() => ReviewCardExportWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardExportWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardExportWhereUniqueInput, 'id'>;
}
