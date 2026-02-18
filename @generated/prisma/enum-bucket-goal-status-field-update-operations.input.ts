import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalStatus } from './bucket-goal-status.enum';

@InputType()
export class EnumBucketGoalStatusFieldUpdateOperationsInput {

    @Field(() => BucketGoalStatus, {nullable:true})
    set?: keyof typeof BucketGoalStatus;
}
