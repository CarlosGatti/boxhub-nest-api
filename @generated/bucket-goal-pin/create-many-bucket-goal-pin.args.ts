import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalPinCreateManyInput } from './bucket-goal-pin-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBucketGoalPinArgs {

    @Field(() => [BucketGoalPinCreateManyInput], {nullable:false})
    @Type(() => BucketGoalPinCreateManyInput)
    data!: Array<BucketGoalPinCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
