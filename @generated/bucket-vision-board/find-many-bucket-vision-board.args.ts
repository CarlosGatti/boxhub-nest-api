import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardOrderByWithRelationInput } from './bucket-vision-board-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionBoardScalarFieldEnum } from './bucket-vision-board-scalar-field.enum';

@ArgsType()
export class FindManyBucketVisionBoardArgs {

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;

    @Field(() => [BucketVisionBoardOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketVisionBoardOrderByWithRelationInput>;

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BucketVisionBoardScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BucketVisionBoardScalarFieldEnum>;
}
