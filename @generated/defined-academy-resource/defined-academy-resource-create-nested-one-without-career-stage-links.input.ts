import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutCareerStageLinksInput } from './defined-academy-resource-create-without-career-stage-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutCareerStageLinksInput } from './defined-academy-resource-create-or-connect-without-career-stage-links.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';

@InputType()
export class DefinedAcademyResourceCreateNestedOneWithoutCareerStageLinksInput {

    @Field(() => DefinedAcademyResourceCreateWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutCareerStageLinksInput)
    create?: DefinedAcademyResourceCreateWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyResourceCreateOrConnectWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutCareerStageLinksInput)
    connectOrCreate?: DefinedAcademyResourceCreateOrConnectWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;
}
