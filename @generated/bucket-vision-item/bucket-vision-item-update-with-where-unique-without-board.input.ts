import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionItemWhereUniqueInput } from './bucket-vision-item-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionItemUpdateWithoutBoardInput } from './bucket-vision-item-update-without-board.input';

@InputType()
export class BucketVisionItemUpdateWithWhereUniqueWithoutBoardInput {

    @Field(() => BucketVisionItemWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionItemWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionItemWhereUniqueInput, 'id'>;

    @Field(() => BucketVisionItemUpdateWithoutBoardInput, {nullable:false})
    @Type(() => BucketVisionItemUpdateWithoutBoardInput)
    data!: BucketVisionItemUpdateWithoutBoardInput;
}
