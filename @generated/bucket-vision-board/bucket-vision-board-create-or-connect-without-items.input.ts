import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateWithoutItemsInput } from './bucket-vision-board-create-without-items.input';

@InputType()
export class BucketVisionBoardCreateOrConnectWithoutItemsInput {

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => BucketVisionBoardCreateWithoutItemsInput, {nullable:false})
    @Type(() => BucketVisionBoardCreateWithoutItemsInput)
    create!: BucketVisionBoardCreateWithoutItemsInput;
}
