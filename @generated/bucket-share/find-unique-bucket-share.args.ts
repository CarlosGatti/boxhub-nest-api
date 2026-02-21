import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketShareWhereUniqueInput } from './bucket-share-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBucketShareArgs {

    @Field(() => BucketShareWhereUniqueInput, {nullable:false})
    @Type(() => BucketShareWhereUniqueInput)
    where!: Prisma.AtLeast<BucketShareWhereUniqueInput, 'id' | 'token'>;
}
