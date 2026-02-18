import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalWhereInput } from './bucket-goal-where.input';
import { Type } from 'class-transformer';
import { BucketGoalUpdateWithoutMediaInput } from './bucket-goal-update-without-media.input';

@InputType()
export class BucketGoalUpdateToOneWithWhereWithoutMediaInput {

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;

    @Field(() => BucketGoalUpdateWithoutMediaInput, {nullable:false})
    @Type(() => BucketGoalUpdateWithoutMediaInput)
    data!: BucketGoalUpdateWithoutMediaInput;
}
