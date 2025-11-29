import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RatingCreateManyBuyerInput } from './rating-create-many-buyer.input';
import { Type } from 'class-transformer';

@InputType()
export class RatingCreateManyBuyerInputEnvelope {

    @Field(() => [RatingCreateManyBuyerInput], {nullable:false})
    @Type(() => RatingCreateManyBuyerInput)
    data!: Array<RatingCreateManyBuyerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
