import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateManyUserInput } from './review-card-project-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCardProjectCreateManyUserInputEnvelope {

    @Field(() => [ReviewCardProjectCreateManyUserInput], {nullable:false})
    @Type(() => ReviewCardProjectCreateManyUserInput)
    data!: Array<ReviewCardProjectCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
