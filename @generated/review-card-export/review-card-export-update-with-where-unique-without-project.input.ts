import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardExportWhereUniqueInput } from './review-card-export-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardExportUpdateWithoutProjectInput } from './review-card-export-update-without-project.input';

@InputType()
export class ReviewCardExportUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => ReviewCardExportWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardExportWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardExportWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardExportUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ReviewCardExportUpdateWithoutProjectInput)
    data!: ReviewCardExportUpdateWithoutProjectInput;
}
