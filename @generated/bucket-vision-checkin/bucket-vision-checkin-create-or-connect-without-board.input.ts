import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionCheckinWhereUniqueInput } from './bucket-vision-checkin-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionCheckinCreateWithoutBoardInput } from './bucket-vision-checkin-create-without-board.input';

@InputType()
export class BucketVisionCheckinCreateOrConnectWithoutBoardInput {

    @Field(() => BucketVisionCheckinWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionCheckinWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionCheckinWhereUniqueInput, 'id'>;

    @Field(() => BucketVisionCheckinCreateWithoutBoardInput, {nullable:false})
    @Type(() => BucketVisionCheckinCreateWithoutBoardInput)
    create!: BucketVisionCheckinCreateWithoutBoardInput;
}
