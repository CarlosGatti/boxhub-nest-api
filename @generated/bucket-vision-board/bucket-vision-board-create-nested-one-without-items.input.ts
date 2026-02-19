import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateWithoutItemsInput } from './bucket-vision-board-create-without-items.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateOrConnectWithoutItemsInput } from './bucket-vision-board-create-or-connect-without-items.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';

@InputType()
export class BucketVisionBoardCreateNestedOneWithoutItemsInput {

    @Field(() => BucketVisionBoardCreateWithoutItemsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateWithoutItemsInput)
    create?: BucketVisionBoardCreateWithoutItemsInput;

    @Field(() => BucketVisionBoardCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateOrConnectWithoutItemsInput)
    connectOrCreate?: BucketVisionBoardCreateOrConnectWithoutItemsInput;

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;
}
