import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileUpdateInput } from './defined-academy-user-career-profile-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyUserCareerProfileArgs {

    @Field(() => DefinedAcademyUserCareerProfileUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileUpdateInput)
    data!: DefinedAcademyUserCareerProfileUpdateInput;

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;
}
