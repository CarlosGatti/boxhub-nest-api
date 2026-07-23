import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateWithoutCompletionsInput } from './defined-academy-career-stage-create-without-completions.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateOrConnectWithoutCompletionsInput } from './defined-academy-career-stage-create-or-connect-without-completions.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';

@InputType()
export class DefinedAcademyCareerStageCreateNestedOneWithoutCompletionsInput {

    @Field(() => DefinedAcademyCareerStageCreateWithoutCompletionsInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateWithoutCompletionsInput)
    create?: DefinedAcademyCareerStageCreateWithoutCompletionsInput;

    @Field(() => DefinedAcademyCareerStageCreateOrConnectWithoutCompletionsInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateOrConnectWithoutCompletionsInput)
    connectOrCreate?: DefinedAcademyCareerStageCreateOrConnectWithoutCompletionsInput;

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;
}
