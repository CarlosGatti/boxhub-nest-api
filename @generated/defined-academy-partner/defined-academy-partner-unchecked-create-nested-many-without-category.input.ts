import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateWithoutCategoryInput } from './defined-academy-partner-create-without-category.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateOrConnectWithoutCategoryInput } from './defined-academy-partner-create-or-connect-without-category.input';
import { DefinedAcademyPartnerCreateManyCategoryInputEnvelope } from './defined-academy-partner-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';

@InputType()
export class DefinedAcademyPartnerUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [DefinedAcademyPartnerCreateWithoutCategoryInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateWithoutCategoryInput)
    create?: Array<DefinedAcademyPartnerCreateWithoutCategoryInput>;

    @Field(() => [DefinedAcademyPartnerCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<DefinedAcademyPartnerCreateOrConnectWithoutCategoryInput>;

    @Field(() => DefinedAcademyPartnerCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateManyCategoryInputEnvelope)
    createMany?: DefinedAcademyPartnerCreateManyCategoryInputEnvelope;

    @Field(() => [DefinedAcademyPartnerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>>;
}
