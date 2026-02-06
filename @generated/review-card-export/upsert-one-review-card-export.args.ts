import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardExportWhereUniqueInput } from './review-card-export-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardExportCreateInput } from './review-card-export-create.input';
import { ReviewCardExportUpdateInput } from './review-card-export-update.input';

@ArgsType()
export class UpsertOneReviewCardExportArgs {

    @Field(() => ReviewCardExportWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardExportWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardExportWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardExportCreateInput, {nullable:false})
    @Type(() => ReviewCardExportCreateInput)
    create!: ReviewCardExportCreateInput;

    @Field(() => ReviewCardExportUpdateInput, {nullable:false})
    @Type(() => ReviewCardExportUpdateInput)
    update!: ReviewCardExportUpdateInput;
}
