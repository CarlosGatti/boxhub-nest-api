import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryCreateWithoutAcademyInput } from './defined-academy-partner-category-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryCreateOrConnectWithoutAcademyInput } from './defined-academy-partner-category-create-or-connect-without-academy.input';
import { DefinedAcademyPartnerCategoryUpsertWithWhereUniqueWithoutAcademyInput } from './defined-academy-partner-category-upsert-with-where-unique-without-academy.input';
import { DefinedAcademyPartnerCategoryCreateManyAcademyInputEnvelope } from './defined-academy-partner-category-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';
import { DefinedAcademyPartnerCategoryUpdateWithWhereUniqueWithoutAcademyInput } from './defined-academy-partner-category-update-with-where-unique-without-academy.input';
import { DefinedAcademyPartnerCategoryUpdateManyWithWhereWithoutAcademyInput } from './defined-academy-partner-category-update-many-with-where-without-academy.input';
import { DefinedAcademyPartnerCategoryScalarWhereInput } from './defined-academy-partner-category-scalar-where.input';

@InputType()
export class DefinedAcademyPartnerCategoryUpdateManyWithoutAcademyNestedInput {

    @Field(() => [DefinedAcademyPartnerCategoryCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyPartnerCategoryCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyPartnerCategoryCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyPartnerCategoryCreateOrConnectWithoutAcademyInput>;

    @Field(() => [DefinedAcademyPartnerCategoryUpsertWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryUpsertWithWhereUniqueWithoutAcademyInput)
    upsert?: Array<DefinedAcademyPartnerCategoryUpsertWithWhereUniqueWithoutAcademyInput>;

    @Field(() => DefinedAcademyPartnerCategoryCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyPartnerCategoryCreateManyAcademyInputEnvelope;

    @Field(() => [DefinedAcademyPartnerCategoryWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerCategoryWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerCategoryWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerCategoryWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerCategoryUpdateWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryUpdateWithWhereUniqueWithoutAcademyInput)
    update?: Array<DefinedAcademyPartnerCategoryUpdateWithWhereUniqueWithoutAcademyInput>;

    @Field(() => [DefinedAcademyPartnerCategoryUpdateManyWithWhereWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryUpdateManyWithWhereWithoutAcademyInput)
    updateMany?: Array<DefinedAcademyPartnerCategoryUpdateManyWithWhereWithoutAcademyInput>;

    @Field(() => [DefinedAcademyPartnerCategoryScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryScalarWhereInput)
    deleteMany?: Array<DefinedAcademyPartnerCategoryScalarWhereInput>;
}
