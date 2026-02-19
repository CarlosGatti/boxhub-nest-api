import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionSectionWhereInput } from './bucket-vision-section-where.input';
import { Type } from 'class-transformer';
import { BucketVisionSectionOrderByWithRelationInput } from './bucket-vision-section-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketVisionSectionWhereUniqueInput } from './bucket-vision-section-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionSectionScalarFieldEnum } from './bucket-vision-section-scalar-field.enum';

@ArgsType()
export class FindFirstBucketVisionSectionArgs {

    @Field(() => BucketVisionSectionWhereInput, {nullable:true})
    @Type(() => BucketVisionSectionWhereInput)
    where?: BucketVisionSectionWhereInput;

    @Field(() => [BucketVisionSectionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketVisionSectionOrderByWithRelationInput>;

    @Field(() => BucketVisionSectionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketVisionSectionWhereUniqueInput, 'id' | 'boardId_type'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BucketVisionSectionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BucketVisionSectionScalarFieldEnum>;
}
