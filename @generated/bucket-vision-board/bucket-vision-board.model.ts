import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionPeriodType } from '../prisma/bucket-vision-period-type.enum';
import { BucketVisionLayoutMode } from '../prisma/bucket-vision-layout-mode.enum';
import { User } from '../user/user.model';
import { BucketVisionSection } from '../bucket-vision-section/bucket-vision-section.model';
import { BucketVisionItem } from '../bucket-vision-item/bucket-vision-item.model';
import { BucketVisionGoalLink } from '../bucket-vision-goal-link/bucket-vision-goal-link.model';
import { BucketVisionCheckin } from '../bucket-vision-checkin/bucket-vision-checkin.model';
import { BucketVisionBoardCount } from './bucket-vision-board-count.output';

@ObjectType()
export class BucketVisionBoard {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false,defaultValue:'Your Vision Board'})
    title!: string;

    @Field(() => BucketVisionPeriodType, {nullable:false,defaultValue:'YEAR'})
    periodType!: keyof typeof BucketVisionPeriodType;

    @Field(() => Int, {nullable:true})
    year!: number | null;

    @Field(() => String, {nullable:true})
    periodKey!: string | null;

    @Field(() => Date, {nullable:true})
    startDate!: Date | null;

    @Field(() => Date, {nullable:true})
    endDate!: Date | null;

    @Field(() => String, {nullable:true})
    theme!: string | null;

    @Field(() => BucketVisionLayoutMode, {nullable:false,defaultValue:'FORM'})
    layoutMode!: keyof typeof BucketVisionLayoutMode;

    @Field(() => String, {nullable:true})
    coverUrl!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [BucketVisionSection], {nullable:true})
    sections?: Array<BucketVisionSection>;

    @Field(() => [BucketVisionItem], {nullable:true})
    items?: Array<BucketVisionItem>;

    @Field(() => [BucketVisionGoalLink], {nullable:true})
    goalLinks?: Array<BucketVisionGoalLink>;

    @Field(() => [BucketVisionCheckin], {nullable:true})
    checkins?: Array<BucketVisionCheckin>;

    @Field(() => BucketVisionBoardCount, {nullable:false})
    _count?: BucketVisionBoardCount;
}
