import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateWithoutGoalLinksInput } from './bucket-vision-board-create-without-goal-links.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateOrConnectWithoutGoalLinksInput } from './bucket-vision-board-create-or-connect-without-goal-links.input';
import { BucketVisionBoardUpsertWithoutGoalLinksInput } from './bucket-vision-board-upsert-without-goal-links.input';
import { Prisma } from '@prisma/client';
import { BucketVisionBoardWhereUniqueInput } from './bucket-vision-board-where-unique.input';
import { BucketVisionBoardUpdateToOneWithWhereWithoutGoalLinksInput } from './bucket-vision-board-update-to-one-with-where-without-goal-links.input';

@InputType()
export class BucketVisionBoardUpdateOneRequiredWithoutGoalLinksNestedInput {

    @Field(() => BucketVisionBoardCreateWithoutGoalLinksInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateWithoutGoalLinksInput)
    create?: BucketVisionBoardCreateWithoutGoalLinksInput;

    @Field(() => BucketVisionBoardCreateOrConnectWithoutGoalLinksInput, {nullable:true})
    @Type(() => BucketVisionBoardCreateOrConnectWithoutGoalLinksInput)
    connectOrCreate?: BucketVisionBoardCreateOrConnectWithoutGoalLinksInput;

    @Field(() => BucketVisionBoardUpsertWithoutGoalLinksInput, {nullable:true})
    @Type(() => BucketVisionBoardUpsertWithoutGoalLinksInput)
    upsert?: BucketVisionBoardUpsertWithoutGoalLinksInput;

    @Field(() => BucketVisionBoardWhereUniqueInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketVisionBoardWhereUniqueInput, 'id' | 'userId_year'>;

    @Field(() => BucketVisionBoardUpdateToOneWithWhereWithoutGoalLinksInput, {nullable:true})
    @Type(() => BucketVisionBoardUpdateToOneWithWhereWithoutGoalLinksInput)
    update?: BucketVisionBoardUpdateToOneWithWhereWithoutGoalLinksInput;
}
