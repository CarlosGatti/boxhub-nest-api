import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalLogCreateManyInput } from './bucket-goal-log-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBucketGoalLogArgs {

    @Field(() => [BucketGoalLogCreateManyInput], {nullable:false})
    @Type(() => BucketGoalLogCreateManyInput)
    data!: Array<BucketGoalLogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
