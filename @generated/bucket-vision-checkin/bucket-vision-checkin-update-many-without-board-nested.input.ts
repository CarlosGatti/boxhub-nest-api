import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionCheckinCreateWithoutBoardInput } from './bucket-vision-checkin-create-without-board.input';
import { Type } from 'class-transformer';
import { BucketVisionCheckinCreateOrConnectWithoutBoardInput } from './bucket-vision-checkin-create-or-connect-without-board.input';
import { BucketVisionCheckinUpsertWithWhereUniqueWithoutBoardInput } from './bucket-vision-checkin-upsert-with-where-unique-without-board.input';
import { BucketVisionCheckinCreateManyBoardInputEnvelope } from './bucket-vision-checkin-create-many-board-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionCheckinWhereUniqueInput } from './bucket-vision-checkin-where-unique.input';
import { BucketVisionCheckinUpdateWithWhereUniqueWithoutBoardInput } from './bucket-vision-checkin-update-with-where-unique-without-board.input';
import { BucketVisionCheckinUpdateManyWithWhereWithoutBoardInput } from './bucket-vision-checkin-update-many-with-where-without-board.input';
import { BucketVisionCheckinScalarWhereInput } from './bucket-vision-checkin-scalar-where.input';

@InputType()
export class BucketVisionCheckinUpdateManyWithoutBoardNestedInput {

    @Field(() => [BucketVisionCheckinCreateWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionCheckinCreateWithoutBoardInput)
    create?: Array<BucketVisionCheckinCreateWithoutBoardInput>;

    @Field(() => [BucketVisionCheckinCreateOrConnectWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionCheckinCreateOrConnectWithoutBoardInput)
    connectOrCreate?: Array<BucketVisionCheckinCreateOrConnectWithoutBoardInput>;

    @Field(() => [BucketVisionCheckinUpsertWithWhereUniqueWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionCheckinUpsertWithWhereUniqueWithoutBoardInput)
    upsert?: Array<BucketVisionCheckinUpsertWithWhereUniqueWithoutBoardInput>;

    @Field(() => BucketVisionCheckinCreateManyBoardInputEnvelope, {nullable:true})
    @Type(() => BucketVisionCheckinCreateManyBoardInputEnvelope)
    createMany?: BucketVisionCheckinCreateManyBoardInputEnvelope;

    @Field(() => [BucketVisionCheckinWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionCheckinWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BucketVisionCheckinWhereUniqueInput, 'id'>>;

    @Field(() => [BucketVisionCheckinWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionCheckinWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BucketVisionCheckinWhereUniqueInput, 'id'>>;

    @Field(() => [BucketVisionCheckinWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionCheckinWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BucketVisionCheckinWhereUniqueInput, 'id'>>;

    @Field(() => [BucketVisionCheckinWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionCheckinWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketVisionCheckinWhereUniqueInput, 'id'>>;

    @Field(() => [BucketVisionCheckinUpdateWithWhereUniqueWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionCheckinUpdateWithWhereUniqueWithoutBoardInput)
    update?: Array<BucketVisionCheckinUpdateWithWhereUniqueWithoutBoardInput>;

    @Field(() => [BucketVisionCheckinUpdateManyWithWhereWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionCheckinUpdateManyWithWhereWithoutBoardInput)
    updateMany?: Array<BucketVisionCheckinUpdateManyWithWhereWithoutBoardInput>;

    @Field(() => [BucketVisionCheckinScalarWhereInput], {nullable:true})
    @Type(() => BucketVisionCheckinScalarWhereInput)
    deleteMany?: Array<BucketVisionCheckinScalarWhereInput>;
}
