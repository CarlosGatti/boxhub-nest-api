import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneBucketVisionBoardArgs {

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;
}
