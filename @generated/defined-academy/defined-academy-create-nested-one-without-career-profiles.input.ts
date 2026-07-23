import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutCareerProfilesInput } from './defined-academy-create-without-career-profiles.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutCareerProfilesInput } from './defined-academy-create-or-connect-without-career-profiles.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';

@InputType()
export class DefinedAcademyCreateNestedOneWithoutCareerProfilesInput {

    @Field(() => DefinedAcademyCreateWithoutCareerProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutCareerProfilesInput)
    create?: DefinedAcademyCreateWithoutCareerProfilesInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutCareerProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutCareerProfilesInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutCareerProfilesInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;
}
