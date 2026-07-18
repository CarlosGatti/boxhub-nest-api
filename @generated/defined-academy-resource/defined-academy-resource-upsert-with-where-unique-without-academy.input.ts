import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceUpdateWithoutAcademyInput } from './defined-academy-resource-update-without-academy.input';
import { DefinedAcademyResourceCreateWithoutAcademyInput } from './defined-academy-resource-create-without-academy.input';

@InputType()
export class DefinedAcademyResourceUpsertWithWhereUniqueWithoutAcademyInput {

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateWithoutAcademyInput)
    update!: DefinedAcademyResourceUpdateWithoutAcademyInput;

    @Field(() => DefinedAcademyResourceCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyResourceCreateWithoutAcademyInput)
    create!: DefinedAcademyResourceCreateWithoutAcademyInput;
}
