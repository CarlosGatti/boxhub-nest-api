import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketShareUpdateInput } from './bucket-share-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BucketShareWhereUniqueInput } from './bucket-share-where-unique.input';

@ArgsType()
export class UpdateOneBucketShareArgs {

    @Field(() => BucketShareUpdateInput, {nullable:false})
    @Type(() => BucketShareUpdateInput)
    data!: BucketShareUpdateInput;

    @Field(() => BucketShareWhereUniqueInput, {nullable:false})
    @Type(() => BucketShareWhereUniqueInput)
    where!: Prisma.AtLeast<BucketShareWhereUniqueInput, 'id' | 'token'>;
}
