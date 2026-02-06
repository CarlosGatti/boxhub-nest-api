import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectCreateWithoutExportsInput } from './review-card-project-create-without-exports.input';

@InputType()
export class ReviewCardProjectCreateOrConnectWithoutExportsInput {

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:false})
    @Type(() => ReviewCardProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ReviewCardProjectCreateWithoutExportsInput, {nullable:false})
    @Type(() => ReviewCardProjectCreateWithoutExportsInput)
    create!: ReviewCardProjectCreateWithoutExportsInput;
}
