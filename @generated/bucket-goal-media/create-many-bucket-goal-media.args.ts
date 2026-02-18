import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalMediaCreateManyInput } from './bucket-goal-media-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBucketGoalMediaArgs {

    @Field(() => [BucketGoalMediaCreateManyInput], {nullable:false})
    @Type(() => BucketGoalMediaCreateManyInput)
    data!: Array<BucketGoalMediaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
