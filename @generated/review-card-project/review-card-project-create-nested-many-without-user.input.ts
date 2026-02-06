import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateWithoutUserInput } from './review-card-project-create-without-user.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateOrConnectWithoutUserInput } from './review-card-project-create-or-connect-without-user.input';
import { ReviewCardProjectCreateManyUserInputEnvelope } from './review-card-project-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';

@InputType()
export class ReviewCardProjectCreateNestedManyWithoutUserInput {

    @Field(() => [ReviewCardProjectCreateWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateWithoutUserInput)
    create?: Array<ReviewCardProjectCreateWithoutUserInput>;

    @Field(() => [ReviewCardProjectCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ReviewCardProjectCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ReviewCardProjectCreateOrConnectWithoutUserInput>;

    @Field(() => ReviewCardProjectCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ReviewCardProjectCreateManyUserInputEnvelope)
    createMany?: ReviewCardProjectCreateManyUserInputEnvelope;

    @Field(() => [ReviewCardProjectWhereUniqueInput], {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>>;
}
