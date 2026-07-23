import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionWhereInput } from './defined-academy-user-career-stage-completion-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionOrderByWithRelationInput } from './defined-academy-user-career-stage-completion-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionScalarFieldEnum } from './defined-academy-user-career-stage-completion-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyUserCareerStageCompletionOrThrowArgs {

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereInput)
    where?: DefinedAcademyUserCareerStageCompletionWhereInput;

    @Field(() => [DefinedAcademyUserCareerStageCompletionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyUserCareerStageCompletionOrderByWithRelationInput>;

    @Field(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyUserCareerStageCompletionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyUserCareerStageCompletionScalarFieldEnum>;
}
