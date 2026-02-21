import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketShareCreateWithoutUserInput } from './bucket-share-create-without-user.input';
import { Type } from 'class-transformer';
import { BucketShareCreateOrConnectWithoutUserInput } from './bucket-share-create-or-connect-without-user.input';
import { BucketShareUpsertWithWhereUniqueWithoutUserInput } from './bucket-share-upsert-with-where-unique-without-user.input';
import { BucketShareCreateManyUserInputEnvelope } from './bucket-share-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketShareWhereUniqueInput } from './bucket-share-where-unique.input';
import { BucketShareUpdateWithWhereUniqueWithoutUserInput } from './bucket-share-update-with-where-unique-without-user.input';
import { BucketShareUpdateManyWithWhereWithoutUserInput } from './bucket-share-update-many-with-where-without-user.input';
import { BucketShareScalarWhereInput } from './bucket-share-scalar-where.input';

@InputType()
export class BucketShareUpdateManyWithoutUserNestedInput {

    @Field(() => [BucketShareCreateWithoutUserInput], {nullable:true})
    @Type(() => BucketShareCreateWithoutUserInput)
    create?: Array<BucketShareCreateWithoutUserInput>;

    @Field(() => [BucketShareCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BucketShareCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BucketShareCreateOrConnectWithoutUserInput>;

    @Field(() => [BucketShareUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BucketShareUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<BucketShareUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => BucketShareCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BucketShareCreateManyUserInputEnvelope)
    createMany?: BucketShareCreateManyUserInputEnvelope;

    @Field(() => [BucketShareWhereUniqueInput], {nullable:true})
    @Type(() => BucketShareWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BucketShareWhereUniqueInput, 'id' | 'token'>>;

    @Field(() => [BucketShareWhereUniqueInput], {nullable:true})
    @Type(() => BucketShareWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BucketShareWhereUniqueInput, 'id' | 'token'>>;

    @Field(() => [BucketShareWhereUniqueInput], {nullable:true})
    @Type(() => BucketShareWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BucketShareWhereUniqueInput, 'id' | 'token'>>;

    @Field(() => [BucketShareWhereUniqueInput], {nullable:true})
    @Type(() => BucketShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketShareWhereUniqueInput, 'id' | 'token'>>;

    @Field(() => [BucketShareUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BucketShareUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<BucketShareUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [BucketShareUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => BucketShareUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<BucketShareUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [BucketShareScalarWhereInput], {nullable:true})
    @Type(() => BucketShareScalarWhereInput)
    deleteMany?: Array<BucketShareScalarWhereInput>;
}
