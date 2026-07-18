import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutAcademyInput } from './defined-academy-resource-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutAcademyInput } from './defined-academy-resource-create-or-connect-without-academy.input';
import { DefinedAcademyResourceCreateManyAcademyInputEnvelope } from './defined-academy-resource-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';

@InputType()
export class DefinedAcademyResourceUncheckedCreateNestedManyWithoutAcademyInput {

    @Field(() => [DefinedAcademyResourceCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyResourceCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyResourceCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyResourceCreateOrConnectWithoutAcademyInput>;

    @Field(() => DefinedAcademyResourceCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyResourceCreateManyAcademyInputEnvelope;

    @Field(() => [DefinedAcademyResourceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>>;
}
