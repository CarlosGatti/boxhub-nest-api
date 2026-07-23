import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageWhereUniqueInput } from './defined-academy-career-stage-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateWithoutContentLinksInput } from './defined-academy-career-stage-create-without-content-links.input';

@InputType()
export class DefinedAcademyCareerStageCreateOrConnectWithoutContentLinksInput {

    @Field(() => DefinedAcademyCareerStageWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageWhereUniqueInput, 'id' | 'journeyId_slug'>;

    @Field(() => DefinedAcademyCareerStageCreateWithoutContentLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageCreateWithoutContentLinksInput)
    create!: DefinedAcademyCareerStageCreateWithoutContentLinksInput;
}
