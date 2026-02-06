import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardScanEventUpdateManyMutationInput } from './review-card-scan-event-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReviewCardScanEventWhereInput } from './review-card-scan-event-where.input';

@ArgsType()
export class UpdateManyReviewCardScanEventArgs {

    @Field(() => ReviewCardScanEventUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCardScanEventUpdateManyMutationInput)
    data!: ReviewCardScanEventUpdateManyMutationInput;

    @Field(() => ReviewCardScanEventWhereInput, {nullable:true})
    @Type(() => ReviewCardScanEventWhereInput)
    where?: ReviewCardScanEventWhereInput;
}
