import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardProjectCreateWithoutExportsInput } from './review-card-project-create-without-exports.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateOrConnectWithoutExportsInput } from './review-card-project-create-or-connect-without-exports.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';

@InputType()
export class ReviewCardProjectCreateNestedOneWithoutExportsInput {

    @Field(() => ReviewCardProjectCreateWithoutExportsInput, {nullable:true})
    @Type(() => ReviewCardProjectCreateWithoutExportsInput)
    create?: ReviewCardProjectCreateWithoutExportsInput;

    @Field(() => ReviewCardProjectCreateOrConnectWithoutExportsInput, {nullable:true})
    @Type(() => ReviewCardProjectCreateOrConnectWithoutExportsInput)
    connectOrCreate?: ReviewCardProjectCreateOrConnectWithoutExportsInput;

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;
}
