import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardExportWhereUniqueInput } from './review-card-export-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardExportCreateWithoutProjectInput } from './review-card-export-create-without-project.input';

@InputType()
export class ReviewCardExportCreateOrConnectWithoutProjectInput {

    @Field(() => ReviewCardExportWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardExportWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardExportWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardExportCreateWithoutProjectInput, {nullable:false})
    @Type(() => ReviewCardExportCreateWithoutProjectInput)
    create!: ReviewCardExportCreateWithoutProjectInput;
}
