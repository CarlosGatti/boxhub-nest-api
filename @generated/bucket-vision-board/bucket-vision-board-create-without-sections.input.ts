import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionPeriodType } from '../prisma/bucket-vision-period-type.enum';
import { Int } from '@nestjs/graphql';
import { BucketVisionLayoutMode } from '../prisma/bucket-vision-layout-mode.enum';
import { UserCreateNestedOneWithoutBucketVisionBoardsInput } from '../user/user-create-nested-one-without-bucket-vision-boards.input';
import { Type } from 'class-transformer';
import { BucketVisionItemCreateNestedManyWithoutBoardInput } from '../bucket-vision-item/bucket-vision-item-create-nested-many-without-board.input';
import { BucketVisionGoalLinkCreateNestedManyWithoutBoardInput } from '../bucket-vision-goal-link/bucket-vision-goal-link-create-nested-many-without-board.input';
import { BucketVisionCheckinCreateNestedManyWithoutBoardInput } from '../bucket-vision-checkin/bucket-vision-checkin-create-nested-many-without-board.input';

@InputType()
export class BucketVisionBoardCreateWithoutSectionsInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => BucketVisionPeriodType, {nullable:true})
    periodType?: keyof typeof BucketVisionPeriodType;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => String, {nullable:true})
    periodKey?: string;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => String, {nullable:true})
    theme?: string;

    @Field(() => BucketVisionLayoutMode, {nullable:true})
    layoutMode?: keyof typeof BucketVisionLayoutMode;

    @Field(() => String, {nullable:true})
    coverUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutBucketVisionBoardsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutBucketVisionBoardsInput)
    user!: UserCreateNestedOneWithoutBucketVisionBoardsInput;

    @Field(() => BucketVisionItemCreateNestedManyWithoutBoardInput, {nullable:true})
    items?: BucketVisionItemCreateNestedManyWithoutBoardInput;

    @Field(() => BucketVisionGoalLinkCreateNestedManyWithoutBoardInput, {nullable:true})
    goalLinks?: BucketVisionGoalLinkCreateNestedManyWithoutBoardInput;

    @Field(() => BucketVisionCheckinCreateNestedManyWithoutBoardInput, {nullable:true})
    checkins?: BucketVisionCheckinCreateNestedManyWithoutBoardInput;
}
