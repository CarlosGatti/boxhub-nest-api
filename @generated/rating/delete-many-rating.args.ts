import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RatingWhereInput } from './rating-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRatingArgs {

    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: RatingWhereInput;
}
