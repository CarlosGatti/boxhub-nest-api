import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RatingScalarWhereInput } from './rating-scalar-where.input';
import { Type } from 'class-transformer';
import { RatingUpdateManyMutationInput } from './rating-update-many-mutation.input';

@InputType()
export class RatingUpdateManyWithWhereWithoutSellerInput {

    @Field(() => RatingScalarWhereInput, {nullable:false})
    @Type(() => RatingScalarWhereInput)
    where!: RatingScalarWhereInput;

    @Field(() => RatingUpdateManyMutationInput, {nullable:false})
    @Type(() => RatingUpdateManyMutationInput)
    data!: RatingUpdateManyMutationInput;
}
