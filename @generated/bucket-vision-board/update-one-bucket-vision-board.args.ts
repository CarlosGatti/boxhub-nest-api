import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionBoardUpdateInput } from './bucket-vision-board-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';

@ArgsType()
export class UpdateOneBucketVisionBoardArgs {

    @Field(() => BucketVisionBoardUpdateInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateInput)
    data!: BucketVisionBoardUpdateInput;

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;
}
