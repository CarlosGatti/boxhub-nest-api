import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardBusinessCreateWithoutProjectsInput } from './review-card-business-create-without-projects.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessCreateOrConnectWithoutProjectsInput } from './review-card-business-create-or-connect-without-projects.input';
import { Prisma } from '@prisma/client';
import { ReviewCardBusinessWhereUniqueInput } from './review-card-business-where-unique.input';

@InputType()
export class ReviewCardBusinessCreateNestedOneWithoutProjectsInput {

    @Field(() => ReviewCardBusinessCreateWithoutProjectsInput, {nullable:true})
    @Type(() => ReviewCardBusinessCreateWithoutProjectsInput)
    create?: ReviewCardBusinessCreateWithoutProjectsInput;

    @Field(() => ReviewCardBusinessCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => ReviewCardBusinessCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: ReviewCardBusinessCreateOrConnectWithoutProjectsInput;

    @Field(() => ReviewCardBusinessWhereUniqueInput, {nullable:true})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>;
}
