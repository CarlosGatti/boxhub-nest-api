import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardUpdateWithoutUserInput } from './bucket-vision-board-update-without-user.input';

@InputType()
export class BucketVisionBoardUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => BucketVisionBoardUpdateWithoutUserInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateWithoutUserInput)
    data!: BucketVisionBoardUpdateWithoutUserInput;
}
