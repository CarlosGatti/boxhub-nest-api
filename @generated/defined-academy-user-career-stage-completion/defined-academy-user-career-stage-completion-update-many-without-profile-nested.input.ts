import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput } from './defined-academy-user-career-stage-completion-create-without-profile.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutProfileInput } from './defined-academy-user-career-stage-completion-create-or-connect-without-profile.input';
import { DefinedAcademyUserCareerStageCompletionUpsertWithWhereUniqueWithoutProfileInput } from './defined-academy-user-career-stage-completion-upsert-with-where-unique-without-profile.input';
import { DefinedAcademyUserCareerStageCompletionCreateManyProfileInputEnvelope } from './defined-academy-user-career-stage-completion-create-many-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';
import { DefinedAcademyUserCareerStageCompletionUpdateWithWhereUniqueWithoutProfileInput } from './defined-academy-user-career-stage-completion-update-with-where-unique-without-profile.input';
import { DefinedAcademyUserCareerStageCompletionUpdateManyWithWhereWithoutProfileInput } from './defined-academy-user-career-stage-completion-update-many-with-where-without-profile.input';
import { DefinedAcademyUserCareerStageCompletionScalarWhereInput } from './defined-academy-user-career-stage-completion-scalar-where.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionUpdateManyWithoutProfileNestedInput {

    @Field(() => [DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput)
    create?: Array<DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutProfileInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutProfileInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutProfileInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionUpsertWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpsertWithWhereUniqueWithoutProfileInput)
    upsert?: Array<DefinedAcademyUserCareerStageCompletionUpsertWithWhereUniqueWithoutProfileInput>;

    @Field(() => DefinedAcademyUserCareerStageCompletionCreateManyProfileInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateManyProfileInputEnvelope)
    createMany?: DefinedAcademyUserCareerStageCompletionCreateManyProfileInputEnvelope;

    @Field(() => [DefinedAcademyUserCareerStageCompletionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerStageCompletionWhereUniqueInput, 'id' | 'profileId_stageId'>>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionUpdateWithWhereUniqueWithoutProfileInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpdateWithWhereUniqueWithoutProfileInput)
    update?: Array<DefinedAcademyUserCareerStageCompletionUpdateWithWhereUniqueWithoutProfileInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionUpdateManyWithWhereWithoutProfileInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpdateManyWithWhereWithoutProfileInput)
    updateMany?: Array<DefinedAcademyUserCareerStageCompletionUpdateManyWithWhereWithoutProfileInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionScalarWhereInput)
    deleteMany?: Array<DefinedAcademyUserCareerStageCompletionScalarWhereInput>;
}
