import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateWithoutExportsInput } from './review-card-project-create-without-exports.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateOrConnectWithoutExportsInput } from './review-card-project-create-or-connect-without-exports.input';
import { ReviewCardProjectUpsertWithoutExportsInput } from './review-card-project-upsert-without-exports.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { ReviewCardProjectUpdateToOneWithWhereWithoutExportsInput } from './review-card-project-update-to-one-with-where-without-exports.input';

@InputType()
export class ReviewCardProjectUpdateOneRequiredWithoutExportsNestedInput {

    @Field(() => ReviewCardProjectCreateWithoutExportsInput, {nullable:true})
    @Type(() => ReviewCardProjectCreateWithoutExportsInput)
    create?: ReviewCardProjectCreateWithoutExportsInput;

    @Field(() => ReviewCardProjectCreateOrConnectWithoutExportsInput, {nullable:true})
    @Type(() => ReviewCardProjectCreateOrConnectWithoutExportsInput)
    connectOrCreate?: ReviewCardProjectCreateOrConnectWithoutExportsInput;

    @Field(() => ReviewCardProjectUpsertWithoutExportsInput, {nullable:true})
    @Type(() => ReviewCardProjectUpsertWithoutExportsInput)
    upsert?: ReviewCardProjectUpsertWithoutExportsInput;

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectUpdateToOneWithWhereWithoutExportsInput, {nullable:true})
    @Type(() => ReviewCardProjectUpdateToOneWithWhereWithoutExportsInput)
    update?: ReviewCardProjectUpdateToOneWithWhereWithoutExportsInput;
}
