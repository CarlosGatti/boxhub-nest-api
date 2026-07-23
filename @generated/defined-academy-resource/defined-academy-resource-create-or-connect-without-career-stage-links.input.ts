import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateWithoutCareerStageLinksInput } from './defined-academy-resource-create-without-career-stage-links.input';

@InputType()
export class DefinedAcademyResourceCreateOrConnectWithoutCareerStageLinksInput {

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceCreateWithoutCareerStageLinksInput, {nullable:false})
    @Type(() => DefinedAcademyResourceCreateWithoutCareerStageLinksInput)
    create!: DefinedAcademyResourceCreateWithoutCareerStageLinksInput;
}
