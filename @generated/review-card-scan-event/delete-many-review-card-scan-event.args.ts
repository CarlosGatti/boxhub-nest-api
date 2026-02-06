import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardScanEventWhereInput } from './review-card-scan-event-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReviewCardScanEventArgs {

    @Field(() => ReviewCardScanEventWhereInput, {nullable:true})
    @Type(() => ReviewCardScanEventWhereInput)
    where?: ReviewCardScanEventWhereInput;
}
