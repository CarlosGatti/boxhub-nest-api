import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardScanEventScalarWhereInput } from './review-card-scan-event-scalar-where.input';
import { Type } from 'class-transformer';
import { ReviewCardScanEventUpdateManyMutationInput } from './review-card-scan-event-update-many-mutation.input';

@InputType()
export class ReviewCardScanEventUpdateManyWithWhereWithoutProjectInput {

    @Field(() => ReviewCardScanEventScalarWhereInput, {nullable:false})
    @Type(() => ReviewCardScanEventScalarWhereInput)
    where!: ReviewCardScanEventScalarWhereInput;

    @Field(() => ReviewCardScanEventUpdateManyMutationInput, {nullable:false})
    @Type(() => ReviewCardScanEventUpdateManyMutationInput)
    data!: ReviewCardScanEventUpdateManyMutationInput;
}
