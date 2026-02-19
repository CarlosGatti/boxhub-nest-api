import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateWithoutUserInput } from './bucket-vision-board-create-without-user.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateOrConnectWithoutUserInput } from './bucket-vision-board-create-or-connect-without-user.input';
import { BucketVisionBoardCreateManyUserInputEnvelope } from './bucket-vision-board-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';

@InputType()
export class BucketVisionBoardUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [BucketVisionBoardCreateWithoutUserInput], {nullable:true})
    @Type(() => BucketVisionBoardCreateWithoutUserInput)
    create?: Array<BucketVisionBoardCreateWithoutUserInput>;

    @Field(() => [BucketVisionBoardCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BucketVisionBoardCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BucketVisionBoardCreateOrConnectWithoutUserInput>;

    @Field(() => BucketVisionBoardCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BucketVisionBoardCreateManyUserInputEnvelope)
    createMany?: BucketVisionBoardCreateManyUserInputEnvelope;

    @Field(() => [BucketVisionBoardWhereUniqueInput], {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>>;
}
