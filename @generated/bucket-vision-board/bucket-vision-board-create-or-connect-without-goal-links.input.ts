import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateWithoutGoalLinksInput } from './bucket-vision-board-create-without-goal-links.input';

@InputType()
export class BucketVisionBoardCreateOrConnectWithoutGoalLinksInput {

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => BucketVisionBoardCreateWithoutGoalLinksInput, {nullable:false})
    @Type(() => BucketVisionBoardCreateWithoutGoalLinksInput)
    create!: BucketVisionBoardCreateWithoutGoalLinksInput;
}
