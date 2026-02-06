import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardScanEventCreateManyProjectInput } from './review-card-scan-event-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCardScanEventCreateManyProjectInputEnvelope {

    @Field(() => [ReviewCardScanEventCreateManyProjectInput], {nullable:false})
    @Type(() => ReviewCardScanEventCreateManyProjectInput)
    data!: Array<ReviewCardScanEventCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
