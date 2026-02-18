import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalCreateManyInput } from './bucket-goal-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBucketGoalArgs {

    @Field(() => [BucketGoalCreateManyInput], {nullable:false})
    @Type(() => BucketGoalCreateManyInput)
    data!: Array<BucketGoalCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
