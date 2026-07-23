import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateInput } from './defined-academy-user-career-profile-create.input';
import { DefinedAcademyUserCareerProfileUpdateInput } from './defined-academy-user-career-profile-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyUserCareerProfileArgs {

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => DefinedAcademyUserCareerProfileCreateInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateInput)
    create!: DefinedAcademyUserCareerProfileCreateInput;

    @Field(() => DefinedAcademyUserCareerProfileUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileUpdateInput)
    update!: DefinedAcademyUserCareerProfileUpdateInput;
}
