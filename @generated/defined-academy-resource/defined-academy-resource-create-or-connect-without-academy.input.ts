import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateWithoutAcademyInput } from './defined-academy-resource-create-without-academy.input';

@InputType()
export class DefinedAcademyResourceCreateOrConnectWithoutAcademyInput {

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyResourceCreateWithoutAcademyInput)
    create!: DefinedAcademyResourceCreateWithoutAcademyInput;
}
