import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardBusinessCreateWithoutProjectsInput } from './review-card-business-create-without-projects.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessCreateOrConnectWithoutProjectsInput } from './review-card-business-create-or-connect-without-projects.input';
import { ReviewCardBusinessUpsertWithoutProjectsInput } from './review-card-business-upsert-without-projects.input';
import { Prisma } from '@prisma/client';
import { ReviewCardBusinessWhereUniqueInput } from './review-card-business-where-unique.input';
import { ReviewCardBusinessUpdateToOneWithWhereWithoutProjectsInput } from './review-card-business-update-to-one-with-where-without-projects.input';

@InputType()
export class ReviewCardBusinessUpdateOneRequiredWithoutProjectsNestedInput {

    @Field(() => ReviewCardBusinessCreateWithoutProjectsInput, {nullable:true})
    @Type(() => ReviewCardBusinessCreateWithoutProjectsInput)
    create?: ReviewCardBusinessCreateWithoutProjectsInput;

    @Field(() => ReviewCardBusinessCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => ReviewCardBusinessCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: ReviewCardBusinessCreateOrConnectWithoutProjectsInput;

    @Field(() => ReviewCardBusinessUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => ReviewCardBusinessUpsertWithoutProjectsInput)
    upsert?: ReviewCardBusinessUpsertWithoutProjectsInput;

    @Field(() => ReviewCardBusinessWhereUniqueInput, {nullable:true})
    @Type(() => ReviewCardBusinessWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>;

    @Field(() => ReviewCardBusinessUpdateToOneWithWhereWithoutProjectsInput, {nullable:true})
    @Type(() => ReviewCardBusinessUpdateToOneWithWhereWithoutProjectsInput)
    update?: ReviewCardBusinessUpdateToOneWithWhereWithoutProjectsInput;
}
