import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionItemWhereInput } from './bucket-vision-item-where.input';
import { Type } from 'class-transformer';
import { BucketVisionItemOrderByWithRelationInput } from './bucket-vision-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketVisionItemWhereUniqueInput } from './bucket-vision-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionItemScalarFieldEnum } from './bucket-vision-item-scalar-field.enum';

@ArgsType()
export class FindManyBucketVisionItemArgs {

    @Field(() => BucketVisionItemWhereInput, {nullable:true})
    @Type(() => BucketVisionItemWhereInput)
    where?: BucketVisionItemWhereInput;

    @Field(() => [BucketVisionItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketVisionItemOrderByWithRelationInput>;

    @Field(() => BucketVisionItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BucketVisionItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BucketVisionItemScalarFieldEnum>;
}
