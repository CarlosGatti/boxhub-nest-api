import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardScanEventWhereInput } from './review-card-scan-event-where.input';

@InputType()
export class ReviewCardScanEventListRelationFilter {

    @Field(() => ReviewCardScanEventWhereInput, {nullable:true})
    every?: ReviewCardScanEventWhereInput;

    @Field(() => ReviewCardScanEventWhereInput, {nullable:true})
    some?: ReviewCardScanEventWhereInput;

    @Field(() => ReviewCardScanEventWhereInput, {nullable:true})
    none?: ReviewCardScanEventWhereInput;
}
