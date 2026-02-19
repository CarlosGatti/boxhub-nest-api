import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateWithoutCheckinsInput } from './bucket-vision-board-create-without-checkins.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateOrConnectWithoutCheckinsInput } from './bucket-vision-board-create-or-connect-without-checkins.input';
import { BucketVisionBoardUpsertWithoutCheckinsInput } from './bucket-vision-board-upsert-without-checkins.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { BucketVisionBoardUpdateToOneWithWhereWithoutCheckinsInput } from './bucket-vision-board-update-to-one-with-where-without-checkins.input';

@InputType()
export class BucketVisionBoardUpdateOneRequiredWithoutCheckinsNestedInput {

    @Field(() => BucketVisionBoardCreateWithoutCheckinsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateWithoutCheckinsInput)
    create?: BucketVisionBoardCreateWithoutCheckinsInput;

    @Field(() => BucketVisionBoardCreateOrConnectWithoutCheckinsInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateOrConnectWithoutCheckinsInput)
    connectOrCreate?: BucketVisionBoardCreateOrConnectWithoutCheckinsInput;

    @Field(() => BucketVisionBoardUpsertWithoutCheckinsInput, {nullable:true})
    @Type(() => BucketVisionBoardUpsertWithoutCheckinsInput)
    upsert?: BucketVisionBoardUpsertWithoutCheckinsInput;

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => BucketVisionBoardUpdateToOneWithWhereWithoutCheckinsInput, {nullable:true})
    @Type(() => BucketVisionBoardUpdateToOneWithWhereWithoutCheckinsInput)
    update?: BucketVisionBoardUpdateToOneWithWhereWithoutCheckinsInput;
}
