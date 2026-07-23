import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCreateWithoutResourceInput } from './defined-academy-career-stage-content-create-without-resource.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentCreateOrConnectWithoutResourceInput } from './defined-academy-career-stage-content-create-or-connect-without-resource.input';
import { DefinedAcademyCareerStageContentCreateManyResourceInputEnvelope } from './defined-academy-career-stage-content-create-many-resource-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';

@InputType()
export class DefinedAcademyCareerStageContentUncheckedCreateNestedManyWithoutResourceInput {

    @Field(() => [DefinedAcademyCareerStageContentCreateWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateWithoutResourceInput)
    create?: Array<DefinedAcademyCareerStageContentCreateWithoutResourceInput>;

    @Field(() => [DefinedAcademyCareerStageContentCreateOrConnectWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateOrConnectWithoutResourceInput)
    connectOrCreate?: Array<DefinedAcademyCareerStageContentCreateOrConnectWithoutResourceInput>;

    @Field(() => DefinedAcademyCareerStageContentCreateManyResourceInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateManyResourceInputEnvelope)
    createMany?: DefinedAcademyCareerStageContentCreateManyResourceInputEnvelope;

    @Field(() => [DefinedAcademyCareerStageContentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>>;
}
