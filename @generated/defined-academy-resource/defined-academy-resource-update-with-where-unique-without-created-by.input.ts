import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceUpdateWithoutCreatedByInput } from './defined-academy-resource-update-without-created-by.input';

@InputType()
export class DefinedAcademyResourceUpdateWithWhereUniqueWithoutCreatedByInput {

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateWithoutCreatedByInput)
    data!: DefinedAcademyResourceUpdateWithoutCreatedByInput;
}
