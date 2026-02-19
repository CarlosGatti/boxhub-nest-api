import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateWithoutCheckinsInput } from './bucket-vision-board-create-without-checkins.input';

@InputType()
export class BucketVisionBoardCreateOrConnectWithoutCheckinsInput {

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => BucketVisionBoardCreateWithoutCheckinsInput, {nullable:false})
    @Type(() => BucketVisionBoardCreateWithoutCheckinsInput)
    create!: BucketVisionBoardCreateWithoutCheckinsInput;
}
