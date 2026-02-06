import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardBusinessWhereInput } from './review-card-business-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReviewCardBusinessArgs {

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    @Type(() => ReviewCardBusinessWhereInput)
    where?: ReviewCardBusinessWhereInput;
}
