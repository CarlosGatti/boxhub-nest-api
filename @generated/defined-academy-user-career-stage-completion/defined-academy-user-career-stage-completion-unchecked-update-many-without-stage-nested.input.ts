import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput } from './defined-academy-user-career-stage-completion-create-without-stage.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutStageInput } from './defined-academy-user-career-stage-completion-create-or-connect-without-stage.input';
import { DefinedAcademyUserCareerStageCompletionUpsertWithWhereUniqueWithoutStageInput } from './defined-academy-user-career-stage-completion-upsert-with-where-unique-without-stage.input';
import { DefinedAcademyUserCareerStageCompletionCreateManyStageInputEnvelope } from './defined-academy-user-career-stage-completion-create-many-stage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerStageCompletionWhereUniqueInput } from './defined-academy-user-career-stage-completion-where-unique.input';
import { DefinedAcademyUserCareerStageCompletionUpdateWithWhereUniqueWithoutStageInput } from './defined-academy-user-career-stage-completion-update-with-where-unique-without-stage.input';
import { DefinedAcademyUserCareerStageCompletionUpdateManyWithWhereWithoutStageInput } from './defined-academy-user-career-stage-completion-update-many-with-where-without-stage.input';
import { DefinedAcademyUserCareerStageCompletionScalarWhereInput } from './defined-academy-user-career-stage-completion-scalar-where.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionUncheckedUpdateManyWithoutStageNestedInput {

    @Field(() => [DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput)
    create?: Array<DefinedAcademyUserCareerStageCompletionCreateWithoutStageInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutStageInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerStageCompletionCreateOrConnectWithoutStageInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionUpsertWithWhereUniqueWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpsertWithWhereUniqueWithoutStageInput)
    upsert?: Array<DefinedAcademyUserCareerStageCompletionUpsertWithWhereUniqueWithoutStageInput>;

    @Field(() => DefinedAcademyUserCareerStageCompletionCreateManyStageInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateManyStageInputEnvelope)
    createMany?: DefinedAcademyUserCareerStageCompletionCreateManyStageInputEnvelope;

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

    @Field(() => [DefinedAcademyUserCareerStageCompletionUpdateWithWhereUniqueWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpdateWithWhereUniqueWithoutStageInput)
    update?: Array<DefinedAcademyUserCareerStageCompletionUpdateWithWhereUniqueWithoutStageInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionUpdateManyWithWhereWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionUpdateManyWithWhereWithoutStageInput)
    updateMany?: Array<DefinedAcademyUserCareerStageCompletionUpdateManyWithWhereWithoutStageInput>;

    @Field(() => [DefinedAcademyUserCareerStageCompletionScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerStageCompletionScalarWhereInput)
    deleteMany?: Array<DefinedAcademyUserCareerStageCompletionScalarWhereInput>;
}
