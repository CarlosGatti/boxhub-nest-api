import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RatingUpdateManyMutationInput } from './rating-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RatingWhereInput } from './rating-where.input';

@ArgsType()
export class UpdateManyRatingArgs {

    @Field(() => RatingUpdateManyMutationInput, {nullable:false})
    @Type(() => RatingUpdateManyMutationInput)
    data!: RatingUpdateManyMutationInput;

    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: RatingWhereInput;
}
