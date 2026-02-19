import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionSectionCreateWithoutBoardInput } from './bucket-vision-section-create-without-board.input';
import { Type } from 'class-transformer';
import { BucketVisionSectionCreateOrConnectWithoutBoardInput } from './bucket-vision-section-create-or-connect-without-board.input';
import { BucketVisionSectionCreateManyBoardInputEnvelope } from './bucket-vision-section-create-many-board-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionSectionWhereUniqueInput } from './bucket-vision-section-where-unique.input';

@InputType()
export class BucketVisionSectionCreateNestedManyWithoutBoardInput {

    @Field(() => [BucketVisionSectionCreateWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionSectionCreateWithoutBoardInput)
    create?: Array<BucketVisionSectionCreateWithoutBoardInput>;

    @Field(() => [BucketVisionSectionCreateOrConnectWithoutBoardInput], {nullable:true})
    @Type(() => BucketVisionSectionCreateOrConnectWithoutBoardInput)
    connectOrCreate?: Array<BucketVisionSectionCreateOrConnectWithoutBoardInput>;

    @Field(() => BucketVisionSectionCreateManyBoardInputEnvelope, {nullable:true})
    @Type(() => BucketVisionSectionCreateManyBoardInputEnvelope)
    createMany?: BucketVisionSectionCreateManyBoardInputEnvelope;

    @Field(() => [BucketVisionSectionWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionSectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketVisionSectionWhereUniqueInput, 'id' | 'boardId_type'>>;
}
