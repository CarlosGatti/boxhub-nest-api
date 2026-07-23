import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCreateWithoutStageInput } from './defined-academy-career-stage-content-create-without-stage.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentCreateOrConnectWithoutStageInput } from './defined-academy-career-stage-content-create-or-connect-without-stage.input';
import { DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutStageInput } from './defined-academy-career-stage-content-upsert-with-where-unique-without-stage.input';
import { DefinedAcademyCareerStageContentCreateManyStageInputEnvelope } from './defined-academy-career-stage-content-create-many-stage-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';
import { DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutStageInput } from './defined-academy-career-stage-content-update-with-where-unique-without-stage.input';
import { DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutStageInput } from './defined-academy-career-stage-content-update-many-with-where-without-stage.input';
import { DefinedAcademyCareerStageContentScalarWhereInput } from './defined-academy-career-stage-content-scalar-where.input';

@InputType()
export class DefinedAcademyCareerStageContentUncheckedUpdateManyWithoutStageNestedInput {

    @Field(() => [DefinedAcademyCareerStageContentCreateWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateWithoutStageInput)
    create?: Array<DefinedAcademyCareerStageContentCreateWithoutStageInput>;

    @Field(() => [DefinedAcademyCareerStageContentCreateOrConnectWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateOrConnectWithoutStageInput)
    connectOrCreate?: Array<DefinedAcademyCareerStageContentCreateOrConnectWithoutStageInput>;

    @Field(() => [DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutStageInput)
    upsert?: Array<DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutStageInput>;

    @Field(() => DefinedAcademyCareerStageContentCreateManyStageInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateManyStageInputEnvelope)
    createMany?: DefinedAcademyCareerStageContentCreateManyStageInputEnvelope;

    @Field(() => [DefinedAcademyCareerStageContentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyCareerStageContentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyCareerStageContentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyCareerStageContentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutStageInput)
    update?: Array<DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutStageInput>;

    @Field(() => [DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutStageInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutStageInput)
    updateMany?: Array<DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutStageInput>;

    @Field(() => [DefinedAcademyCareerStageContentScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentScalarWhereInput)
    deleteMany?: Array<DefinedAcademyCareerStageContentScalarWhereInput>;
}
