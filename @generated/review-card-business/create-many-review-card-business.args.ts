import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardBusinessCreateManyInput } from './review-card-business-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReviewCardBusinessArgs {

    @Field(() => [ReviewCardBusinessCreateManyInput], {nullable:false})
    @Type(() => ReviewCardBusinessCreateManyInput)
    data!: Array<ReviewCardBusinessCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
