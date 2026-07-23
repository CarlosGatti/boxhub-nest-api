import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput } from './defined-academy-user-career-stage-completion-create-without-profile.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutProfileInput } from './defined-academy-user-career-stage-completion-create-or-connect-without-profile.input';
import { DefinedAcademyUserCareerStageCompletionCreateManyProfileInputEnvelope } from './defined-academy-user-career-stage-completion-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionCreateNestedManyWithoutProfileInput {

    @Field(() => [DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput)
    create?: Array<DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutProfileInput>;

    @Field(() => DefinedAcademyUserCareerStageCompletionCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateManyProfileInputEnvelope)
    createMany?: DefinedAcademyUserCareerStageCompletionCreateManyProfileInputEnvelope;

    @Field(() => [DefinedAcademyUserCareerStageCompletionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>>;
}
