import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardScanEventCreateManyInput } from './review-card-scan-event-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReviewCardScanEventArgs {

    @Field(() => [ReviewCardScanEventCreateManyInput], {nullable:false})
    @Type(() => ReviewCardScanEventCreateManyInput)
    data!: Array<ReviewCardScanEventCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
