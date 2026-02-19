import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateWithoutGoalLinksInput } from './bucket-vision-board-create-without-goal-links.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateOrConnectWithoutGoalLinksInput } from './bucket-vision-board-create-or-connect-without-goal-links.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';

@InputType()
export class BucketVisionBoardCreateNestedOneWithoutGoalLinksInput {

    @Field(() => BucketVisionBoardCreateWithoutGoalLinksInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateWithoutGoalLinksInput)
    create?: BucketVisionBoardCreateWithoutGoalLinksInput;

    @Field(() => BucketVisionBoardCreateOrConnectWithoutGoalLinksInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateOrConnectWithoutGoalLinksInput)
    connectOrCreate?: BucketVisionBoardCreateOrConnectWithoutGoalLinksInput;

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;
}
