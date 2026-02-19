import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionPeriodType } from '../prisma/bucket-vision-period-type.enum';
import { BucketVisionLayoutMode } from '../prisma/bucket-vision-layout-mode.enum';

@InputType()
export class BucketVisionBoardCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => BucketVisionPeriodType, {nullable:true})
    periodType?: keyof typeof BucketVisionPeriodType;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => String, {nullable:true})
    periodKey?: string;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => String, {nullable:true})
    theme?: string;

    @Field(() => BucketVisionLayoutMode, {nullable:true})
    layoutMode?: keyof typeof BucketVisionLayoutMode;

    @Field(() => String, {nullable:true})
    coverUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
