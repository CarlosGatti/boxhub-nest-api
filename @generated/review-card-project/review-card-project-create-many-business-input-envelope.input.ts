import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateManyBusinessInput } from './review-card-project-create-many-business.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCardProjectCreateManyBusinessInputEnvelope {

    @Field(() => [ReviewCardProjectCreateManyBusinessInput], {nullable:false})
    @Type(() => ReviewCardProjectCreateManyBusinessInput)
    data!: Array<ReviewCardProjectCreateManyBusinessInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
