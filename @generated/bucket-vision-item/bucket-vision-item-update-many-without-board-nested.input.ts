import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionItemCreateWithoutBoardInput } from './bucket-vision-item-create-without-board.input';
import { Type } from 'class-transformer';
import { BucketVisionItemCreateOrConnectWithoutBoardInput } from './bucket-vision-item-create-or-connect-without-board.input';
import { BucketVisionItemUpsertWithWhereUniqueWithoutBoardInput } from './bucket-vision-item-upsert-with-where-unique-without-board.input';
import { BucketVisionItemCreateManyBoardInputEnvelope } from './bucket-vision-item-create-many-board-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionItemWhereUniqueInput } from './bucket-vision-item-where-unique.input';
import { BucketVisionItemUpdateWithWhereUniqueWithoutBoardInput } from './bucket-vision-item-update-with-where-unique-without-board.input';
import { BucketVisionItemUpdateManyWithWhereWithoutBoardInput } from './bucket-vision-item-update-many-with-where-without-board.input';
import { BucketVisionItemScalarWhereInput } from './bucket-vision-item-scalar-where.input';

@InputType()
export class BucketVisionItemUpdateManyWithoutBoardNestedInput {

    @Field(() => [BucketVisionItemCreateWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionItemCreateWithoutBoardInput)
    create?: Array<BucketVisionItemCreateWithoutBoardInput>;

    @Field(() => [BucketVisionItemCreateOrConnectWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionItemCreateOrConnectWithoutBoardInput)
    connectOrCreate?: Array<BucketVisionItemCreateOrConnectWithoutBoardInput>;

    @Field(() => [BucketVisionItemUpsertWithWhereUniqueWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionItemUpsertWithWhereUniqueWithoutBoardInput)
    upsert?: Array<BucketVisionItemUpsertWithWhereUniqueWithoutBoardInput>;

    @Field(() => BucketVisionItemCreateManyBoardInputEnvelope, {nullable:true})
    @Type(() => BucketVisionItemCreateManyBoardInputEnvelope)
    createMany?: BucketVisionItemCreateManyBoardInputEnvelope;

    @Field(() => [BucketVisionItemWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>>;

    @Field(() => [BucketVisionItemWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>>;

    @Field(() => [BucketVisionItemWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>>;

    @Field(() => [BucketVisionItemWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>>;

    @Field(() => [BucketVisionItemUpdateWithWhereUniqueWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionItemUpdateWithWhereUniqueWithoutBoardInput)
    update?: Array<BucketVisionItemUpdateWithWhereUniqueWithoutBoardInput>;

    @Field(() => [BucketVisionItemUpdateManyWithWhereWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionItemUpdateManyWithWhereWithoutBoardInput)
    updateMany?: Array<BucketVisionItemUpdateManyWithWhereWithoutBoardInput>;

    @Field(() => [BucketVisionItemScalarWhereInput], {nullable:true})
    @Type(() => BucketVisionItemScalarWhereInput)
    deleteMany?: Array<BucketVisionItemScalarWhereInput>;
}
