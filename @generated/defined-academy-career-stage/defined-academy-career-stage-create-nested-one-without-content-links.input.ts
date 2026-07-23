import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateWithoutContentLinksInput } from './defined-academy-career-stage-create-without-content-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateOrConnectWithoutContentLinksInput } from './defined-academy-career-stage-create-or-connect-without-content-links.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';

@InputType()
export class DefinedAcademyCareerStageCreateNestedOneWithoutContentLinksInput {

    @Field(() => DefinedAcademyCareerStageCreateWithoutContentLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateWithoutContentLinksInput)
    create?: DefinedAcademyCareerStageCreateWithoutContentLinksInput;

    @Field(() => DefinedAcademyCareerStageCreateOrConnectWithoutContentLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageCreateOrConnectWithoutContentLinksInput)
    connectOrCreate?: DefinedAcademyCareerStageCreateOrConnectWithoutContentLinksInput;

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;
}
