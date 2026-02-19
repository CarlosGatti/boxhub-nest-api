import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateWithoutUserInput } from './bucket-vision-board-create-without-user.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateOrConnectWithoutUserInput } from './bucket-vision-board-create-or-connect-without-user.input';
import { BucketVisionBoardUpsertWithWhereUniqueWithoutUserInput } from './bucket-vision-board-upsert-with-where-unique-without-user.input';
import { BucketVisionBoardCreateManyUserInputEnvelope } from './bucket-vision-board-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { BucketVisionBoardUpdateWithWhereUniqueWithoutUserInput } from './bucket-vision-board-update-with-where-unique-without-user.input';
import { BucketVisionBoardUpdateManyWithWhereWithoutUserInput } from './bucket-vision-board-update-many-with-where-without-user.input';
import { BucketVisionBoardScalarWhereInput } from './bucket-vision-board-scalar-where.input';

@InputType()
export class BucketVisionBoardUpdateManyWithoutUserNestedInput {

    @Field(() => [BucketVisionBoardCreateWithoutUserInput], {nullable:true})
    @Type(() => BucketVisionBoardCreateWithoutUserInput)
    create?: Array<BucketVisionBoardCreateWithoutUserInput>;

    @Field(() => [BucketVisionBoardCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BucketVisionBoardCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BucketVisionBoardCreateOrConnectWithoutUserInput>;

    @Field(() => [BucketVisionBoardUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BucketVisionBoardUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<BucketVisionBoardUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => BucketVisionBoardCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BucketVisionBoardCreateManyUserInputEnvelope)
    createMany?: BucketVisionBoardCreateManyUserInputEnvelope;

    @Field(() => [BucketVisionBoardWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>>;

    @Field(() => [BucketVisionBoardWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>>;

    @Field(() => [BucketVisionBoardWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>>;

    @Field(() => [BucketVisionBoardWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>>;

    @Field(() => [BucketVisionBoardUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BucketVisionBoardUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<BucketVisionBoardUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [BucketVisionBoardUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => BucketVisionBoardUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<BucketVisionBoardUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [BucketVisionBoardScalarWhereInput], {nullable:true})
    @Type(() => BucketVisionBoardScalarWhereInput)
    deleteMany?: Array<BucketVisionBoardScalarWhereInput>;
}
