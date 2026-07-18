import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateWithoutShortLinksInput } from './defined-academy-partner-create-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateOrConnectWithoutShortLinksInput } from './defined-academy-partner-create-or-connect-without-short-links.input';
import { DefinedAcademyPartnerUpsertWithoutShortLinksInput } from './defined-academy-partner-upsert-without-short-links.input';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { DefinedAcademyPartnerUpdateToOneWithWhereWithoutShortLinksInput } from './defined-academy-partner-update-to-one-with-where-without-short-links.input';

@InputType()
export class DefinedAcademyPartnerUpdateOneWithoutShortLinksNestedInput {

    @Field(() => DefinedAcademyPartnerCreateWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateWithoutShortLinksInput)
    create?: DefinedAcademyPartnerCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyPartnerCreateOrConnectWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateOrConnectWithoutShortLinksInput)
    connectOrCreate?: DefinedAcademyPartnerCreateOrConnectWithoutShortLinksInput;

    @Field(() => DefinedAcademyPartnerUpsertWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerUpsertWithoutShortLinksInput)
    upsert?: DefinedAcademyPartnerUpsertWithoutShortLinksInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    disconnect?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    delete?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerUpdateToOneWithWhereWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerUpdateToOneWithWhereWithoutShortLinksInput)
    update?: DefinedAcademyPartnerUpdateToOneWithWhereWithoutShortLinksInput;
}
