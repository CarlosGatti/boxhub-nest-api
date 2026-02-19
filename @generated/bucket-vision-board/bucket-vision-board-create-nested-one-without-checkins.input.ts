import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateWithoutCheckinsInput } from './bucket-vision-board-create-without-checkins.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateOrConnectWithoutCheckinsInput } from './bucket-vision-board-create-or-connect-without-checkins.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';

@InputType()
export class BucketVisionBoardCreateNestedOneWithoutCheckinsInput {

    @Field(() => BucketVisionBoardCreateWithoutCheckinsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateWithoutCheckinsInput)
    create?: BucketVisionBoardCreateWithoutCheckinsInput;

    @Field(() => BucketVisionBoardCreateOrConnectWithoutCheckinsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateOrConnectWithoutCheckinsInput)
    connectOrCreate?: BucketVisionBoardCreateOrConnectWithoutCheckinsInput;

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;
}
