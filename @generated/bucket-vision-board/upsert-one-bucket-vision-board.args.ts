import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateInput } from './bucket-vision-board-create.input';
import { BucketVisionBoardUpdateInput } from './bucket-vision-board-update.input';

@ArgsType()
export class UpsertOneBucketVisionBoardArgs {

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => BucketVisionBoardCreateInput, {nullable:false})
    @Type(() => BucketVisionBoardCreateInput)
    create!: BucketVisionBoardCreateInput;

    @Field(() => BucketVisionBoardUpdateInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateInput)
    update!: BucketVisionBoardUpdateInput;
}
