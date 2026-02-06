import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardBusinessCreateWithoutUserInput } from './review-card-business-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessCreateOrConnectWithoutUserInput } from './review-card-business-create-or-connect-without-user.input';
import { ReviewCardBusinessUpsertWithWhereUniqueWithoutUserInput } from './review-card-business-upsert-with-where-unique-without-user.input';
import { ReviewCardBusinessCreateManyUserInputEnvelope } from './review-card-business-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardBusinessWhereUniqueInput } from './review-card-business-where-unique.input';
import { ReviewCardBusinessUpdateWithWhereUniqueWithoutUserInput } from './review-card-business-update-with-where-unique-without-user.input';
import { ReviewCardBusinessUpdateManyWithWhereWithoutUserInput } from './review-card-business-update-many-with-where-without-user.input';
import { ReviewCardBusinessScalarWhereInput } from './review-card-business-scalar-where.input';

@InputType()
export class ReviewCardBusinessUpdateManyWithoutUserNestedInput {

    @Field(() => [ReviewCardBusinessCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardBusinessCreateWithoutUserInput)
    create?: Array<ReviewCardBusinessCreateWithoutUserInput>;

    @Field(() => [ReviewCardBusinessCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardBusinessCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCardBusinessCreateOrConnectWithoutUserInput>;

    @Field(() => [ReviewCardBusinessUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardBusinessUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ReviewCardBusinessUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReviewCardBusinessCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCardBusinessCreateManyUserInputEnvelope)
    createMany?: ReviewCardBusinessCreateManyUserInputEnvelope;

    @Field(() => [ReviewCardBusinessWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardBusinessWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardBusinessWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardBusinessWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewCardBusinessUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardBusinessUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ReviewCardBusinessUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReviewCardBusinessUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardBusinessUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ReviewCardBusinessUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReviewCardBusinessScalarWhereInput], {nullable:true})
    @Type(() => ReviewCardBusinessScalarWhereInput)
    deleteMany?: Array<ReviewCardBusinessScalarWhereInput>;
}
