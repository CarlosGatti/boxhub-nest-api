import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RatingCreateManyInput } from './rating-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRatingArgs {

    @Field(() => [RatingCreateManyInput], {nullable:false})
    @Type(() => RatingCreateManyInput)
    data!: Array<RatingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
