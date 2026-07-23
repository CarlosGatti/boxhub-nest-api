import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutCareerProfilesInput } from './defined-academy-create-without-career-profiles.input';

@InputType()
export class DefinedAcademyCreateOrConnectWithoutCareerProfilesInput {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyCreateWithoutCareerProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutCareerProfilesInput)
    create!: DefinedAcademyCreateWithoutCareerProfilesInput;
}
