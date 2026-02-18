import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalLogUpdateWithoutMediaInput } from './bucket-goal-log-update-without-media.input';
import { Type } from 'class-transformer';
import { BucketGoalLogCreateWithoutMediaInput } from './bucket-goal-log-create-without-media.input';
import { BucketGoalLogWhereInput } from './bucket-goal-log-where.input';

@InputType()
export class BucketGoalLogUpsertWithoutMediaInput {

    @Field(() => BucketGoalLogUpdateWithoutMediaInput, {nullable:false})
    @Type(() => BucketGoalLogUpdateWithoutMediaInput)
    update!: BucketGoalLogUpdateWithoutMediaInput;

    @Field(() => BucketGoalLogCreateWithoutMediaInput, {nullable:false})
    @Type(() => BucketGoalLogCreateWithoutMediaInput)
    create!: BucketGoalLogCreateWithoutMediaInput;

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    @Type(() => BucketGoalLogWhereInput)
    where?: BucketGoalLogWhereInput;
}
