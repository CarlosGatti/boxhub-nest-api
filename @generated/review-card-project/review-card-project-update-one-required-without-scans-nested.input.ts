import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateWithoutScansInput } from './review-card-project-create-without-scans.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateOrConnectWithoutScansInput } from './review-card-project-create-or-connect-without-scans.input';
import { ReviewCardProjectUpsertWithoutScansInput } from './review-card-project-upsert-without-scans.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { ReviewCardProjectUpdateToOneWithWhereWithoutScansInput } from './review-card-project-update-to-one-with-where-without-scans.input';

@InputType()
export class ReviewCardProjectUpdateOneRequiredWithoutScansNestedInput {

    @Field(() => ReviewCardProjectCreateWithoutScansInput, {nullable:true})
    @Type(() => ReviewCardProjectCreateWithoutScansInput)
    create?: ReviewCardProjectCreateWithoutScansInput;

    @Field(() => ReviewCardProjectCreateOrConnectWithoutScansInput, {nullable:true})
    @Type(() => ReviewCardProjectCreateOrConnectWithoutScansInput)
    connectOrCreate?: ReviewCardProjectCreateOrConnectWithoutScansInput;

    @Field(() => ReviewCardProjectUpsertWithoutScansInput, {nullable:true})
    @Type(() => ReviewCardProjectUpsertWithoutScansInput)
    upsert?: ReviewCardProjectUpsertWithoutScansInput;

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectUpdateToOneWithWhereWithoutScansInput, {nullable:true})
    @Type(() => ReviewCardProjectUpdateToOneWithWhereWithoutScansInput)
    update?: ReviewCardProjectUpdateToOneWithWhereWithoutScansInput;
}
