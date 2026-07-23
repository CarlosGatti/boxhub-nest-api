import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileWhereInput } from './defined-academy-user-career-profile-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileOrderByWithRelationInput } from './defined-academy-user-career-profile-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileScalarFieldEnum } from './defined-academy-user-career-profile-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyUserCareerProfileArgs {

    @Field(() => DefinedAcademyUserCareerProfileWhereInput, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereInput)
    where?: DefinedAcademyUserCareerProfileWhereInput;

    @Field(() => [DefinedAcademyUserCareerProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyUserCareerProfileOrderByWithRelationInput>;

    @Field(() => DefinedAcademyUserCareerProfileWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyUserCareerProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyUserCareerProfileScalarFieldEnum>;
}
