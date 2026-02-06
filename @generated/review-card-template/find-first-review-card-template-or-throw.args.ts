import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardTemplateWhereInput } from './review-card-template-where.input';
import { Type } from 'class-transformer';
import { ReviewCardTemplateOrderByWithRelationInput } from './review-card-template-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewCardTemplateWhereUniqueInput } from './review-card-template-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardTemplateScalarFieldEnum } from './review-card-template-scalar-field.enum';

@ArgsType()
export class FindFirstReviewCardTemplateOrThrowArgs {

    @Field(() => ReviewCardTemplateWhereInput, {nullable:true})
    @Type(() => ReviewCardTemplateWhereInput)
    where?: ReviewCardTemplateWhereInput;

    @Field(() => [ReviewCardTemplateOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCardTemplateOrderByWithRelationInput>;

    @Field(() => ReviewCardTemplateWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewCardTemplateWhereUniqueInput, 'id' | 'key'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewCardTemplateScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewCardTemplateScalarFieldEnum>;
}
