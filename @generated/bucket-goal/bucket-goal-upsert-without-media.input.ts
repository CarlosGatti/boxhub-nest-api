import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalUpdateWithoutMediaInput } from './bucket-goal-update-without-media.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateWithoutMediaInput } from './bucket-goal-create-without-media.input';
import { BucketGoalWhereInput } from './bucket-goal-where.input';

@InputType()
export class BucketGoalUpsertWithoutMediaInput {

    @Field(() => BucketGoalUpdateWithoutMediaInput, {nullable:false})
    @Type(() => BucketGoalUpdateWithoutMediaInput)
    update!: BucketGoalUpdateWithoutMediaInput;

    @Field(() => BucketGoalCreateWithoutMediaInput, {nullable:false})
    @Type(() => BucketGoalCreateWithoutMediaInput)
    create!: BucketGoalCreateWithoutMediaInput;

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;
}
