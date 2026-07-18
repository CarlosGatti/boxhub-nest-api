import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateWithoutAcademyInput } from './defined-academy-partner-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateOrConnectWithoutAcademyInput } from './defined-academy-partner-create-or-connect-without-academy.input';
import { DefinedAcademyPartnerCreateManyAcademyInputEnvelope } from './defined-academy-partner-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';

@InputType()
export class DefinedAcademyPartnerCreateNestedManyWithoutAcademyInput {

    @Field(() => [DefinedAcademyPartnerCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyPartnerCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyPartnerCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyPartnerCreateOrConnectWithoutAcademyInput>;

    @Field(() => DefinedAcademyPartnerCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyPartnerCreateManyAcademyInputEnvelope;

    @Field(() => [DefinedAcademyPartnerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>>;
}
