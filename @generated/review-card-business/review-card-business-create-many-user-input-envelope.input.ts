import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardBusinessCreateManyUserInput } from './review-card-business-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCardBusinessCreateManyUserInputEnvelope {

    @Field(() => [ReviewCardBusinessCreateManyUserInput], {nullable:false})
    @Type(() => ReviewCardBusinessCreateManyUserInput)
    data!: Array<ReviewCardBusinessCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
