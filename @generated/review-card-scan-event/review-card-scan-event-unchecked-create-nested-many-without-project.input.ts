import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardScanEventCreateWithoutProjectInput } from './review-card-scan-event-create-without-project.input';
import { Type } from 'class-transformer';
import { ReviewCardScanEventCreateOrConnectWithoutProjectInput } from './review-card-scan-event-create-or-connect-without-project.input';
import { ReviewCardScanEventCreateManyProjectInputEnvelope } from './review-card-scan-event-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardScanEventWhereUniqueInput } from './review-card-scan-event-where-unique.input';

@InputType()
export class ReviewCardScanEventUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [ReviewCardScanEventCreateWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardScanEventCreateWithoutProjectInput)
    create?: Array<ReviewCardScanEventCreateWithoutProjectInput>;

    @Field(() => [ReviewCardScanEventCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardScanEventCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ReviewCardScanEventCreateOrConnectWithoutProjectInput>;

    @Field(() => ReviewCardScanEventCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ReviewCardScanEventCreateManyProjectInputEnvelope)
    createMany?: ReviewCardScanEventCreateManyProjectInputEnvelope;

    @Field(() => [ReviewCardScanEventWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardScanEventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>>;
}
