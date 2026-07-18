import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryCreateWithoutAcademyInput } from './defined-academy-partner-category-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryCreateOrConnectWithoutAcademyInput } from './defined-academy-partner-category-create-or-connect-without-academy.input';
import { DefinedAcademyPartnerCategoryCreateManyAcademyInputEnvelope } from './defined-academy-partner-category-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';

@InputType()
export class DefinedAcademyPartnerCategoryUncheckedCreateNestedManyWithoutAcademyInput {

    @Field(() => [DefinedAcademyPartnerCategoryCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyPartnerCategoryCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyPartnerCategoryCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyPartnerCategoryCreateOrConnectWithoutAcademyInput>;

    @Field(() => DefinedAcademyPartnerCategoryCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyPartnerCategoryCreateManyAcademyInputEnvelope;

    @Field(() => [DefinedAcademyPartnerCategoryWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>>;
}
