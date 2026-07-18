import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutCreatedByInput } from './defined-academy-resource-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutCreatedByInput } from './defined-academy-resource-create-or-connect-without-created-by.input';
import { DefinedAcademyResourceCreateManyCreatedByInputEnvelope } from './defined-academy-resource-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';

@InputType()
export class DefinedAcademyResourceCreateNestedManyWithoutCreatedByInput {

    @Field(() => [DefinedAcademyResourceCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutCreatedByInput)
    create?: Array<DefinedAcademyResourceCreateWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyResourceCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DefinedAcademyResourceCreateOrConnectWithoutCreatedByInput>;

    @Field(() => DefinedAcademyResourceCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateManyCreatedByInputEnvelope)
    createMany?: DefinedAcademyResourceCreateManyCreatedByInputEnvelope;

    @Field(() => [DefinedAcademyResourceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>>;
}
