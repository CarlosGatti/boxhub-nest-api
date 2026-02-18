import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateNestedOneWithoutLogsInput } from '../bucket-goal/bucket-goal-create-nested-one-without-logs.input';

@InputType()
export class BucketGoalLogCreateWithoutMediaInput {

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
}
