import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RatingCreateInput } from './rating-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRatingArgs {

    @Field(() => RatingCreateInput, {nullable:false})
    @Type(() => RatingCreateInput)
    data!: RatingCreateInput;
}
