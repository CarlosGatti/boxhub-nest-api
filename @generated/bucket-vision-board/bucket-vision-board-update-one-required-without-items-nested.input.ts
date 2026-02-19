import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateWithoutItemsInput } from './bucket-vision-board-create-without-items.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateOrConnectWithoutItemsInput } from './bucket-vision-board-create-or-connect-without-items.input';
import { BucketVisionBoardUpsertWithoutItemsInput } from './bucket-vision-board-upsert-without-items.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { BucketVisionBoardUpdateToOneWithWhereWithoutItemsInput } from './bucket-vision-board-update-to-one-with-where-without-items.input';

@InputType()
export class BucketVisionBoardUpdateOneRequiredWithoutItemsNestedInput {

    @Field(() => BucketVisionBoardCreateWithoutItemsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateWithoutItemsInput)
    create?: BucketVisionBoardCreateWithoutItemsInput;

    @Field(() => BucketVisionBoardCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateOrConnectWithoutItemsInput)
    connectOrCreate?: BucketVisionBoardCreateOrConnectWithoutItemsInput;

    @Field(() => BucketVisionBoardUpsertWithoutItemsInput, {nullable:true})
    @Type(() => BucketVisionBoardUpsertWithoutItemsInput)
    upsert?: BucketVisionBoardUpsertWithoutItemsInput;

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => BucketVisionBoardUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => BucketVisionBoardUpdateToOneWithWhereWithoutItemsInput)
    update?: BucketVisionBoardUpdateToOneWithWhereWithoutItemsInput;
}
