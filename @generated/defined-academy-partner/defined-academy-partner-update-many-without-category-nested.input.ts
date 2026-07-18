import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateWithoutCategoryInput } from './defined-academy-partner-create-without-category.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateOrConnectWithoutCategoryInput } from './defined-academy-partner-create-or-connect-without-category.input';
import { DefinedAcademyPartnerUpsertWithWhereUniqueWithoutCategoryInput } from './defined-academy-partner-upsert-with-where-unique-without-category.input';
import { DefinedAcademyPartnerCreateManyCategoryInputEnvelope } from './defined-academy-partner-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { DefinedAcademyPartnerUpdateWithWhereUniqueWithoutCategoryInput } from './defined-academy-partner-update-with-where-unique-without-category.input';
import { DefinedAcademyPartnerUpdateManyWithWhereWithoutCategoryInput } from './defined-academy-partner-update-many-with-where-without-category.input';
import { DefinedAcademyPartnerScalarWhereInput } from './defined-academy-partner-scalar-where.input';

@InputType()
export class DefinedAcademyPartnerUpdateManyWithoutCategoryNestedInput {

    @Field(() => [DefinedAcademyPartnerCreateWithoutCategoryInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateWithoutCategoryInput)
    create?: Array<DefinedAcademyPartnerCreateWithoutCategoryInput>;

    @Field(() => [DefinedAcademyPartnerCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<DefinedAcademyPartnerCreateOrConnectWithoutCategoryInput>;

    @Field(() => [DefinedAcademyPartnerUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<DefinedAcademyPartnerUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => DefinedAcademyPartnerCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateManyCategoryInputEnvelope)
    createMany?: DefinedAcademyPartnerCreateManyCategoryInputEnvelope;

    @Field(() => [DefinedAcademyPartnerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<DefinedAcademyPartnerUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [DefinedAcademyPartnerUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<DefinedAcademyPartnerUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [DefinedAcademyPartnerScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerScalarWhereInput)
    deleteMany?: Array<DefinedAcademyPartnerScalarWhereInput>;
}
