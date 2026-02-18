import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalMediaCreateNestedManyWithoutLogInput } from '../bucket-goal-media/bucket-goal-media-create-nested-many-without-log.input';

@InputType()
export class BucketGoalLogCreateWithoutGoalInput {

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => Date, {nullable:false})
    happenedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BucketGoalMediaCreateNestedManyWithoutLogInput, {nullable:true})
    media?: BucketGoalMediaCreateNestedManyWithoutLogInput;
}
