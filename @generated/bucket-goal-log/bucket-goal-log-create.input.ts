import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateNestedOneWithoutLogsInput } from '../bucket-goal/bucket-goal-create-nested-one-without-logs.input';
import { BucketGoalMediaCreateNestedManyWithoutLogInput } from '../bucket-goal-media/bucket-goal-media-create-nested-many-without-log.input';

@InputType()
export class BucketGoalLogCreateInput {

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => Date, {nullable:false})
    happenedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BucketGoalCreateNestedOneWithoutLogsInput, {nullable:false})
    goal!: BucketGoalCreateNestedOneWithoutLogsInput;

    @Field(() => BucketGoalMediaCreateNestedManyWithoutLogInput, {nullable:true})
    media?: BucketGoalMediaCreateNestedManyWithoutLogInput;
}
