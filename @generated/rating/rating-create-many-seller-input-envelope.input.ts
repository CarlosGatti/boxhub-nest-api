import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RatingCreateManySellerInput } from './rating-create-many-seller.input';
import { Type } from 'class-transformer';

@InputType()
export class RatingCreateManySellerInputEnvelope {

    @Field(() => [RatingCreateManySellerInput], {nullable:false})
    @Type(() => RatingCreateManySellerInput)
    data!: Array<RatingCreateManySellerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
