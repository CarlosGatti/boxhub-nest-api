import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardBusinessCreateWithoutUserInput } from './review-card-business-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessCreateOrConnectWithoutUserInput } from './review-card-business-create-or-connect-without-user.input';
import { ReviewCardBusinessCreateManyUserInputEnvelope } from './review-card-business-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardBusinessWhereUniqueInput } from './review-card-business-where-unique.input';

@InputType()
export class ReviewCardBusinessCreateNestedManyWithoutUserInput {

    @Field(() => [ReviewCardBusinessCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardBusinessCreateWithoutUserInput)
    create?: Array<ReviewCardBusinessCreateWithoutUserInput>;

    @Field(() => [ReviewCardBusinessCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardBusinessCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCardBusinessCreateOrConnectWithoutUserInput>;

    @Field(() => ReviewCardBusinessCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCardBusinessCreateManyUserInputEnvelope)
    createMany?: ReviewCardBusinessCreateManyUserInputEnvelope;

    @Field(() => [ReviewCardBusinessWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>>;
}
