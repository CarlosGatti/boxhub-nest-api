import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput } from './defined-academy-user-career-stage-completion-create-without-stage.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutStageInput } from './defined-academy-user-career-stage-completion-create-or-connect-without-stage.input';
import { DefinedAcademyUserCareerStageCompletionCreateManyStageInputEnvelope } from './defined-academy-user-career-stage-completion-create-many-stage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionUncheckedCreateNestedManyWithoutStageInput {

    @Field(() => [DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput)
    create?: Array<DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutStageInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutStageInput>;

    @Field(() => DefinedAcademyUserCareerStageCompletionCreateManyStageInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateManyStageInputEnvelope)
    createMany?: DefinedAcademyUserCareerStageCompletionCreateManyStageInputEnvelope;

    @Field(() => [DefinedAcademyUserCareerStageCompletionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>>;
}
