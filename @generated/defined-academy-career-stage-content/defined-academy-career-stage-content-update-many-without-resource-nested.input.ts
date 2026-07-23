import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCreateWithoutResourceInput } from './defined-academy-career-stage-content-create-without-resource.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentCreateOrConnectWithoutResourceInput } from './defined-academy-career-stage-content-create-or-connect-without-resource.input';
import { DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutResourceInput } from './defined-academy-career-stage-content-upsert-with-where-unique-without-resource.input';
import { DefinedAcademyCareerStageContentCreateManyResourceInputEnvelope } from './defined-academy-career-stage-content-create-many-resource-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';
import { DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutResourceInput } from './defined-academy-career-stage-content-update-with-where-unique-without-resource.input';
import { DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutResourceInput } from './defined-academy-career-stage-content-update-many-with-where-without-resource.input';
import { DefinedAcademyCareerStageContentScalarWhereInput } from './defined-academy-career-stage-content-scalar-where.input';

@InputType()
export class DefinedAcademyCareerStageContentUpdateManyWithoutResourceNestedInput {

    @Field(() => [DefinedAcademyCareerStageContentCreateWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateWithoutResourceInput)
    create?: Array<DefinedAcademyCareerStageContentCreateWithoutResourceInput>;

    @Field(() => [DefinedAcademyCareerStageContentCreateOrConnectWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateOrConnectWithoutResourceInput)
    connectOrCreate?: Array<DefinedAcademyCareerStageContentCreateOrConnectWithoutResourceInput>;

    @Field(() => [DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutResourceInput)
    upsert?: Array<DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutResourceInput>;

    @Field(() => DefinedAcademyCareerStageContentCreateManyResourceInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateManyResourceInputEnvelope)
    createMany?: DefinedAcademyCareerStageContentCreateManyResourceInputEnvelope;

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

    @Field(() => [DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutResourceInput)
    update?: Array<DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutResourceInput>;

    @Field(() => [DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutResourceInput)
    updateMany?: Array<DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutResourceInput>;

    @Field(() => [DefinedAcademyCareerStageContentScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentScalarWhereInput)
    deleteMany?: Array<DefinedAcademyCareerStageContentScalarWhereInput>;
}
