import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionItemCreateWithoutBoardInput } from './bucket-vision-item-create-without-board.input';
import { Type } from 'class-transformer';
import { BucketVisionItemCreateOrConnectWithoutBoardInput } from './bucket-vision-item-create-or-connect-without-board.input';
import { BucketVisionItemCreateManyBoardInputEnvelope } from './bucket-vision-item-create-many-board-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionItemWhereUniqueInput } from './bucket-vision-item-where-unique.input';

@InputType()
export class BucketVisionItemUncheckedCreateNestedManyWithoutBoardInput {

    @Field(() => [BucketVisionItemCreateWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionItemCreateWithoutBoardInput)
    create?: Array<BucketVisionItemCreateWithoutBoardInput>;

    @Field(() => [BucketVisionItemCreateOrConnectWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionItemCreateOrConnectWithoutBoardInput)
    connectOrCreate?: Array<BucketVisionItemCreateOrConnectWithoutBoardInput>;

    @Field(() => BucketVisionItemCreateManyBoardInputEnvelope, {nullable:true})
    @Type(() => BucketVisionItemCreateManyBoardInputEnvelope)
    createMany?: BucketVisionItemCreateManyBoardInputEnvelope;

    @Field(() => [BucketVisionItemWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>>;
}
