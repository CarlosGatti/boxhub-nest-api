import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentWhereInput } from './defined-academy-career-stage-content-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentOrderByWithRelationInput } from './defined-academy-career-stage-content-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentScalarFieldEnum } from './defined-academy-career-stage-content-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyCareerStageContentOrThrowArgs {

    @Field(() => DefinedAcademyCareerStageContentWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereInput)
    where?: DefinedAcademyCareerStageContentWhereInput;

    @Field(() => [DefinedAcademyCareerStageContentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyCareerStageContentOrderByWithRelationInput>;

    @Field(() => DefinedAcademyCareerStageContentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyCareerStageContentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyCareerStageContentScalarFieldEnum>;
}
