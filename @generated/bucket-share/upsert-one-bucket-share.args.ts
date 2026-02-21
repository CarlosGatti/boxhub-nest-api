import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketShareWhereUniqueInput } from './bucket-share-where-unique.input';
import { Type } from 'class-transformer';
import { BucketShareCreateInput } from './bucket-share-create.input';
import { BucketShareUpdateInput } from './bucket-share-update.input';

@ArgsType()
export class UpsertOneBucketShareArgs {

    @Field(() => BucketShareWhereUniqueInput, {nullable:false})
    @Type(() => BucketShareWhereUniqueInput)
    where!: Prisma.AtLeast<BucketShareWhereUniqueInput, 'id' | 'token'>;

    @Field(() => BucketShareCreateInput, {nullable:false})
    @Type(() => BucketShareCreateInput)
    create!: BucketShareCreateInput;

    @Field(() => BucketShareUpdateInput, {nullable:false})
    @Type(() => BucketShareUpdateInput)
    update!: BucketShareUpdateInput;
}
