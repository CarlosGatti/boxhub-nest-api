import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalType } from './bucket-goal-type.enum';

@InputType()
export class EnumBucketGoalTypeFieldUpdateOperationsInput {

    @Field(() => BucketGoalType, {nullable:true})
    set?: keyof typeof BucketGoalType;
}
