import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardExportWhereUniqueInput } from './review-card-export-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueReviewCardExportArgs {

    @Field(() => ReviewCardExportWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardExportWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardExportWhereUniqueInput, 'id'>;
}
