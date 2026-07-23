import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput } from './defined-academy-career-stage-create-without-current-profiles.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateOrConnectWithoutCurrentProfilesInput } from './defined-academy-career-stage-create-or-connect-without-current-profiles.input';
import { DefinedAcademyCareerStageUpsertWithoutCurrentProfilesInput } from './defined-academy-career-stage-upsert-without-current-profiles.input';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { DefinedAcademyCareerStageUpdateToOneWithWhereWithoutCurrentProfilesInput } from './defined-academy-career-stage-update-to-one-with-where-without-current-profiles.input';

@InputType()
export class DefinedAcademyCareerStageUpdateOneWithoutCurrentProfilesNestedInput {

    @Field(() => DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput)
    create?: DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput;

    @Field(() => DefinedAcademyCareerStageCreateOrConnectWithoutCurrentProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateOrConnectWithoutCurrentProfilesInput)
    connectOrCreate?: DefinedAcademyCareerStageCreateOrConnectWithoutCurrentProfilesInput;

    @Field(() => DefinedAcademyCareerStageUpsertWithoutCurrentProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageUpsertWithoutCurrentProfilesInput)
    upsert?: DefinedAcademyCareerStageUpsertWithoutCurrentProfilesInput;

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    disconnect?: DefinedAcademyCareerStageWhereInput;

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    delete?: DefinedAcademyCareerStageWhereInput;

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;

    @Field(() => DefinedAcademyCareerStageUpdateToOneWithWhereWithoutCurrentProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageUpdateToOneWithWhereWithoutCurrentProfilesInput)
    update?: DefinedAcademyCareerStageUpdateToOneWithWhereWithoutCurrentProfilesInput;
}
