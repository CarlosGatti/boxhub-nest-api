import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutCareerStageLinksInput } from './defined-academy-resource-create-without-career-stage-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutCareerStageLinksInput } from './defined-academy-resource-create-or-connect-without-career-stage-links.input';
import { DefinedAcademyResourceUpsertWithoutCareerStageLinksInput } from './defined-academy-resource-upsert-without-career-stage-links.input';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { DefinedAcademyResourceUpdateToOneWithWhereWithoutCareerStageLinksInput } from './defined-academy-resource-update-to-one-with-where-without-career-stage-links.input';

@InputType()
export class DefinedAcademyResourceUpdateOneWithoutCareerStageLinksNestedInput {

    @Field(() => DefinedAcademyResourceCreateWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutCareerStageLinksInput)
    create?: DefinedAcademyResourceCreateWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyResourceCreateOrConnectWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutCareerStageLinksInput)
    connectOrCreate?: DefinedAcademyResourceCreateOrConnectWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyResourceUpsertWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceUpsertWithoutCareerStageLinksInput)
    upsert?: DefinedAcademyResourceUpsertWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    disconnect?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    delete?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceUpdateToOneWithWhereWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyResourceUpdateToOneWithWhereWithoutCareerStageLinksInput)
    update?: DefinedAcademyResourceUpdateToOneWithWhereWithoutCareerStageLinksInput;
}
