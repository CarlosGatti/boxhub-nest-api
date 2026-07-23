import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageOrderByWithRelationInput } from './defined-academy-career-stage-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageScalarFieldEnum } from './defined-academy-career-stage-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyCareerStageArgs {

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    where?: DefinedAcademyCareerStageWhereInput;

    @Field(() => [DefinedAcademyCareerStageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyCareerStageOrderByWithRelationInput>;

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyCareerStageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyCareerStageScalarFieldEnum>;
}
