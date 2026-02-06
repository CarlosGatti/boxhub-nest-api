import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardTemplateCreateWithoutProjectsInput } from './review-card-template-create-without-projects.input';
import { Type } from 'class-transformer';
import { ReviewCardTemplateCreateOrConnectWithoutProjectsInput } from './review-card-template-create-or-connect-without-projects.input';
import { ReviewCardTemplateUpsertWithoutProjectsInput } from './review-card-template-upsert-without-projects.input';
import { Prisma } from '@prisma/client';
import { ReviewCardTemplateWhereUniqueInput } from './review-card-template-where-unique.input';
import { ReviewCardTemplateUpdateToOneWithWhereWithoutProjectsInput } from './review-card-template-update-to-one-with-where-without-projects.input';

@InputType()
export class ReviewCardTemplateUpdateOneRequiredWithoutProjectsNestedInput {

    @Field(() => ReviewCardTemplateCreateWithoutProjectsInput, {nullable:true})
    @Type(() => ReviewCardTemplateCreateWithoutProjectsInput)
    create?: ReviewCardTemplateCreateWithoutProjectsInput;

    @Field(() => ReviewCardTemplateCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => ReviewCardTemplateCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: ReviewCardTemplateCreateOrConnectWithoutProjectsInput;

    @Field(() => ReviewCardTemplateUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => ReviewCardTemplateUpsertWithoutProjectsInput)
    upsert?: ReviewCardTemplateUpsertWithoutProjectsInput;

    @Field(() => ReviewCardTemplateWhereUniqueInput, {nullable:true})
    @Type(() => ReviewCardTemplateWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewCardTemplateWhereUniqueInput, 'id' | 'key'>;

    @Field(() => ReviewCardTemplateUpdateToOneWithWhereWithoutProjectsInput, {nullable:true})
    @Type(() => ReviewCardTemplateUpdateToOneWithWhereWithoutProjectsInput)
    update?: ReviewCardTemplateUpdateToOneWithWhereWithoutProjectsInput;
}
