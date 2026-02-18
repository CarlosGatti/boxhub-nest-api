import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketGoalMediaUncheckedCreateNestedManyWithoutLogInput } from '../bucket-goal-media/bucket-goal-media-unchecked-create-nested-many-without-log.input';

@InputType()
export class BucketGoalLogUncheckedCreateWithoutGoalInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    note!: string;

    @Field(() => Date, {nullable:false})
    happenedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BucketGoalMediaUncheckedCreateNestedManyWithoutLogInput, {nullable:true})
    media?: BucketGoalMediaUncheckedCreateNestedManyWithoutLogInput;
}
