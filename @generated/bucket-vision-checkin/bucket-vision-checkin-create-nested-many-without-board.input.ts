import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionCheckinCreateWithoutBoardInput } from './bucket-vision-checkin-create-without-board.input';
import { Type } from 'class-transformer';
import { BucketVisionCheckinCreateOrConnectWithoutBoardInput } from './bucket-vision-checkin-create-or-connect-without-board.input';
import { BucketVisionCheckinCreateManyBoardInputEnvelope } from './bucket-vision-checkin-create-many-board-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionCheckinWhereUniqueInput } from './bucket-vision-checkin-where-unique.input';

@InputType()
export class BucketVisionCheckinCreateNestedManyWithoutBoardInput {

    @Field(() => [BucketVisionCheckinCreateWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionCheckinCreateWithoutBoardInput)
    create?: Array<BucketVisionCheckinCreateWithoutBoardInput>;

    @Field(() => [BucketVisionCheckinCreateOrConnectWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionCheckinCreateOrConnectWithoutBoardInput)
    connectOrCreate?: Array<BucketVisionCheckinCreateOrConnectWithoutBoardInput>;

    @Field(() => BucketVisionCheckinCreateManyBoardInputEnvelope, {nullable:true})
    @Type(() => BucketVisionCheckinCreateManyBoardInputEnvelope)
    createMany?: BucketVisionCheckinCreateManyBoardInputEnvelope;

    @Field(() => [BucketVisionCheckinWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionCheckinWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketVisionCheckinWhereUniqueInput, 'id'>>;
}
