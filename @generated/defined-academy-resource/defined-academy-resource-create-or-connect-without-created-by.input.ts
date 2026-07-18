import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateWithoutCreatedByInput } from './defined-academy-resource-create-without-created-by.input';

@InputType()
export class DefinedAcademyResourceCreateOrConnectWithoutCreatedByInput {

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => DefinedAcademyResourceCreateWithoutCreatedByInput)
    create!: DefinedAcademyResourceCreateWithoutCreatedByInput;
}
