import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardProjectCreateManyInput } from './review-card-project-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReviewCardProjectArgs {

    @Field(() => [ReviewCardProjectCreateManyInput], {nullable:false})
    @Type(() => ReviewCardProjectCreateManyInput)
    data!: Array<ReviewCardProjectCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
