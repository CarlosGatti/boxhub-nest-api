import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateWithoutContentLinksInput } from './defined-academy-career-stage-create-without-content-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateOrConnectWithoutContentLinksInput } from './defined-academy-career-stage-create-or-connect-without-content-links.input';
import { DefinedAcademyCareerStageUpsertWithoutContentLinksInput } from './defined-academy-career-stage-upsert-without-content-links.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { DefinedAcademyCareerStageUpdateToOneWithWhereWithoutContentLinksInput } from './defined-academy-career-stage-update-to-one-with-where-without-content-links.input';

@InputType()
export class DefinedAcademyCareerStageUpdateOneRequiredWithoutContentLinksNestedInput {

    @Field(() => DefinedAcademyCareerStageCreateWithoutContentLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateWithoutContentLinksInput)
    create?: DefinedAcademyCareerStageCreateWithoutContentLinksInput;

    @Field(() => DefinedAcademyCareerStageCreateOrConnectWithoutContentLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateOrConnectWithoutContentLinksInput)
    connectOrCreate?: DefinedAcademyCareerStageCreateOrConnectWithoutContentLinksInput;

    @Field(() => DefinedAcademyCareerStageUpsertWithoutContentLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageUpsertWithoutContentLinksInput)
    upsert?: DefinedAcademyCareerStageUpsertWithoutContentLinksInput;

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;

    @Field(() => DefinedAcademyCareerStageUpdateToOneWithWhereWithoutContentLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageUpdateToOneWithWhereWithoutContentLinksInput)
    update?: DefinedAcademyCareerStageUpdateToOneWithWhereWithoutContentLinksInput;
}
