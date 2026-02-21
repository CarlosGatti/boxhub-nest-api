import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketShareCreateWithoutUserInput } from './bucket-share-create-without-user.input';
import { Type } from 'class-transformer';
import { BucketShareCreateOrConnectWithoutUserInput } from './bucket-share-create-or-connect-without-user.input';
import { BucketShareCreateManyUserInputEnvelope } from './bucket-share-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketShareWhereUniqueInput } from './bucket-share-where-unique.input';

@InputType()
export class BucketShareUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [BucketShareCreateWithoutUserInput], {nullable:true})
    @Type(() => BucketShareCreateWithoutUserInput)
    create?: Array<BucketShareCreateWithoutUserInput>;

    @Field(() => [BucketShareCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BucketShareCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BucketShareCreateOrConnectWithoutUserInput>;

    @Field(() => BucketShareCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BucketShareCreateManyUserInputEnvelope)
    createMany?: BucketShareCreateManyUserInputEnvelope;

    @Field(() => [BucketShareWhereUniqueInput], {nullable:true})
    @Type(() => BucketShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketShareWhereUniqueInput, 'id' | 'token'>>;
}
