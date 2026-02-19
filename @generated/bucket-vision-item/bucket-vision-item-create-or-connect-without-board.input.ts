import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionItemWhereUniqueInput } from './bucket-vision-item-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionItemCreateWithoutBoardInput } from './bucket-vision-item-create-without-board.input';

@InputType()
export class BucketVisionItemCreateOrConnectWithoutBoardInput {

    @Field(() => BucketVisionItemWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionItemWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>;

    @Field(() => BucketVisionItemCreateWithoutBoardInput, {nullable:false})
    @Type(() => BucketVisionItemCreateWithoutBoardInput)
    create!: BucketVisionItemCreateWithoutBoardInput;
}
