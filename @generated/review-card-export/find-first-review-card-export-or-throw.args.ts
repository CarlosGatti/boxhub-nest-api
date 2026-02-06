import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardExportWhereInput } from './review-card-export-where.input';
import { Type } from 'class-transformer';
import { ReviewCardExportOrderByWithRelationInput } from './review-card-export-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewCardExportWhereUniqueInput } from './review-card-export-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardExportScalarFieldEnum } from './review-card-export-scalar-field.enum';

@ArgsType()
export class FindFirstReviewCardExportOrThrowArgs {

    @Field(() => ReviewCardExportWhereInput, {nullable:true})
    @Type(() => ReviewCardExportWhereInput)
    where?: ReviewCardExportWhereInput;

    @Field(() => [ReviewCardExportOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCardExportOrderByWithRelationInput>;

    @Field(() => ReviewCardExportWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewCardExportWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewCardExportScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewCardExportScalarFieldEnum>;
}
