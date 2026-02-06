import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardScanEventCreateWithoutProjectInput } from './review-card-scan-event-create-without-project.input';
import { Type } from 'class-transformer';
import { ReviewCardScanEventCreateOrConnectWithoutProjectInput } from './review-card-scan-event-create-or-connect-without-project.input';
import { ReviewCardScanEventUpsertWithWhereUniqueWithoutProjectInput } from './review-card-scan-event-upsert-with-where-unique-without-project.input';
import { ReviewCardScanEventCreateManyProjectInputEnvelope } from './review-card-scan-event-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardScanEventWhereUniqueInput } from './review-card-scan-event-where-unique.input';
import { ReviewCardScanEventUpdateWithWhereUniqueWithoutProjectInput } from './review-card-scan-event-update-with-where-unique-without-project.input';
import { ReviewCardScanEventUpdateManyWithWhereWithoutProjectInput } from './review-card-scan-event-update-many-with-where-without-project.input';
import { ReviewCardScanEventScalarWhereInput } from './review-card-scan-event-scalar-where.input';

@InputType()
export class ReviewCardScanEventUpdateManyWithoutProjectNestedInput {

    @Field(() => [ReviewCardScanEventCreateWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardScanEventCreateWithoutProjectInput)
    create?: Array<ReviewCardScanEventCreateWithoutProjectInput>;

    @Field(() => [ReviewCardScanEventCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardScanEventCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ReviewCardScanEventCreateOrConnectWithoutProjectInput>;

    @Field(() => [ReviewCardScanEventUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardScanEventUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<ReviewCardScanEventUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => ReviewCardScanEventCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ReviewCardScanEventCreateManyProjectInputEnvelope)
    createMany?: ReviewCardScanEventCreateManyProjectInputEnvelope;

    @Field(() => [ReviewCardScanEventWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardScanEventWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardScanEventWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardScanEventWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardScanEventWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardScanEventWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardScanEventWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardScanEventWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardScanEventWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardScanEventUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardScanEventUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<ReviewCardScanEventUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [ReviewCardScanEventUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => ReviewCardScanEventUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<ReviewCardScanEventUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [ReviewCardScanEventScalarWhereInput], {nullable:true})
    @Type(() => ReviewCardScanEventScalarWhereInput)
    deleteMany?: Array<ReviewCardScanEventScalarWhereInput>;
}
