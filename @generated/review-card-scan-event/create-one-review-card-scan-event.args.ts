import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardScanEventCreateInput } from './review-card-scan-event-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReviewCardScanEventArgs {

    @Field(() => ReviewCardScanEventCreateInput, {nullable:false})
    @Type(() => ReviewCardScanEventCreateInput)
    data!: ReviewCardScanEventCreateInput;
}
