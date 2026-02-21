import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketShareWhereInput } from './bucket-share-where.input';
import { Type } from 'class-transformer';
import { BucketShareOrderByWithRelationInput } from './bucket-share-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketShareWhereUniqueInput } from './bucket-share-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketShareScalarFieldEnum } from './bucket-share-scalar-field.enum';

@ArgsType()
export class FindFirstBucketShareArgs {

    @Field(() => BucketShareWhereInput, {nullable:true})
    @Type(() => BucketShareWhereInput)
    where?: BucketShareWhereInput;

    @Field(() => [BucketShareOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketShareOrderByWithRelationInput>;

    @Field(() => BucketShareWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketShareWhereUniqueInput, 'id' | 'token'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BucketShareScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BucketShareScalarFieldEnum>;
}
