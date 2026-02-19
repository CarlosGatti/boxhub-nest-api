import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionSectionCreateWithoutBoardInput } from './bucket-vision-section-create-without-board.input';
import { Type } from 'class-transformer';
import { BucketVisionSectionCreateOrConnectWithoutBoardInput } from './bucket-vision-section-create-or-connect-without-board.input';
import { BucketVisionSectionUpsertWithWhereUniqueWithoutBoardInput } from './bucket-vision-section-upsert-with-where-unique-without-board.input';
import { BucketVisionSectionCreateManyBoardInputEnvelope } from './bucket-vision-section-create-many-board-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionSectionWhereUniqueInput } from './bucket-vision-section-where-unique.input';
import { BucketVisionSectionUpdateWithWhereUniqueWithoutBoardInput } from './bucket-vision-section-update-with-where-unique-without-board.input';
import { BucketVisionSectionUpdateManyWithWhereWithoutBoardInput } from './bucket-vision-section-update-many-with-where-without-board.input';
import { BucketVisionSectionScalarWhereInput } from './bucket-vision-section-scalar-where.input';

@InputType()
export class BucketVisionSectionUpdateManyWithoutBoardNestedInput {

    @Field(() => [BucketVisionSectionCreateWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionSectionCreateWithoutBoardInput)
    create?: Array<BucketVisionSectionCreateWithoutBoardInput>;

    @Field(() => [BucketVisionSectionCreateOrConnectWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionSectionCreateOrConnectWithoutBoardInput)
    connectOrCreate?: Array<BucketVisionSectionCreateOrConnectWithoutBoardInput>;

    @Field(() => [BucketVisionSectionUpsertWithWhereUniqueWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionSectionUpsertWithWhereUniqueWithoutBoardInput)
    upsert?: Array<BucketVisionSectionUpsertWithWhereUniqueWithoutBoardInput>;

    @Field(() => BucketVisionSectionCreateManyBoardInputEnvelope, {nullable:true})
    @Type(() => BucketVisionSectionCreateManyBoardInputEnvelope)
    createMany?: BucketVisionSectionCreateManyBoardInputEnvelope;

    @Field(() => [BucketVisionSectionWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionSectionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BucketVisionSectionWhereUniqueInput, 'id' | 'boardId_type'>>;

    @Field(() => [BucketVisionSectionWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionSectionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BucketVisionSectionWhereUniqueInput, 'id' | 'boardId_type'>>;

    @Field(() => [BucketVisionSectionWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionSectionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BucketVisionSectionWhereUniqueInput, 'id' | 'boardId_type'>>;

    @Field(() => [BucketVisionSectionWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionSectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketVisionSectionWhereUniqueInput, 'id' | 'boardId_type'>>;

    @Field(() => [BucketVisionSectionUpdateWithWhereUniqueWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionSectionUpdateWithWhereUniqueWithoutBoardInput)
    update?: Array<BucketVisionSectionUpdateWithWhereUniqueWithoutBoardInput>;

    @Field(() => [BucketVisionSectionUpdateManyWithWhereWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionSectionUpdateManyWithWhereWithoutBoardInput)
    updateMany?: Array<BucketVisionSectionUpdateManyWithWhereWithoutBoardInput>;

    @Field(() => [BucketVisionSectionScalarWhereInput], {nullable:true})
    @Type(() => BucketVisionSectionScalarWhereInput)
    deleteMany?: Array<BucketVisionSectionScalarWhereInput>;
}
