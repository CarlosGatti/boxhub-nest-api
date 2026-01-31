import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateManyTargetAppInput } from './feedback-create-many-target-app.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedbackCreateManyTargetAppInputEnvelope {

    @Field(() => [FeedbackCreateManyTargetAppInput], {nullable:false})
    @Type(() => FeedbackCreateManyTargetAppInput)
    data!: Array<FeedbackCreateManyTargetAppInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
