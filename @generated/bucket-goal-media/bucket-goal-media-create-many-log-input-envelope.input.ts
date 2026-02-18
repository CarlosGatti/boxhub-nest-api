import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalMediaCreateManyLogInput } from './bucket-goal-media-create-many-log.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketGoalMediaCreateManyLogInputEnvelope {

    @Field(() => [BucketGoalMediaCreateManyLogInput], {nullable:false})
    @Type(() => BucketGoalMediaCreateManyLogInput)
    data!: Array<BucketGoalMediaCreateManyLogInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
