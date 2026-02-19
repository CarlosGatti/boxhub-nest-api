import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionCheckinWhereInput } from './bucket-vision-checkin-where.input';
import { Type } from 'class-transformer';
import { BucketVisionCheckinOrderByWithRelationInput } from './bucket-vision-checkin-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketVisionCheckinWhereUniqueInput } from './bucket-vision-checkin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionCheckinScalarFieldEnum } from './bucket-vision-checkin-scalar-field.enum';

@ArgsType()
export class FindFirstBucketVisionCheckinOrThrowArgs {

    @Field(() => BucketVisionCheckinWhereInput, {nullable:true})
    @Type(() => BucketVisionCheckinWhereInput)
    where?: BucketVisionCheckinWhereInput;

    @Field(() => [BucketVisionCheckinOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketVisionCheckinOrderByWithRelationInput>;

    @Field(() => BucketVisionCheckinWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketVisionCheckinWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BucketVisionCheckinScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BucketVisionCheckinScalarFieldEnum>;
}
