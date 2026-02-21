import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketShareWhereUniqueInput } from './bucket-share-where-unique.input';
import { Type } from 'class-transformer';
import { BucketShareUpdateWithoutUserInput } from './bucket-share-update-without-user.input';
import { BucketShareCreateWithoutUserInput } from './bucket-share-create-without-user.input';

@InputType()
export class BucketShareUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => BucketShareWhereUniqueInput, {nullable:false})
    @Type(() => BucketShareWhereUniqueInput)
    where!: Prisma.AtLeast<BucketShareWhereUniqueInput, 'id' | 'token'>;

    @Field(() => BucketShareUpdateWithoutUserInput, {nullable:false})
    @Type(() => BucketShareUpdateWithoutUserInput)
    update!: BucketShareUpdateWithoutUserInput;

    @Field(() => BucketShareCreateWithoutUserInput, {nullable:false})
    @Type(() => BucketShareCreateWithoutUserInput)
    create!: BucketShareCreateWithoutUserInput;
}
