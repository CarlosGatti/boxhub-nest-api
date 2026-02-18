import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalLogWhereInput } from './bucket-goal-log-where.input';
import { Type } from 'class-transformer';
import { BucketGoalLogUpdateWithoutMediaInput } from './bucket-goal-log-update-without-media.input';

@InputType()
export class BucketGoalLogUpdateToOneWithWhereWithoutMediaInput {

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    @Type(() => BucketGoalLogWhereInput)
    where?: BucketGoalLogWhereInput;

    @Field(() => BucketGoalLogUpdateWithoutMediaInput, {nullable:false})
    @Type(() => BucketGoalLogUpdateWithoutMediaInput)
    data!: BucketGoalLogUpdateWithoutMediaInput;
}
