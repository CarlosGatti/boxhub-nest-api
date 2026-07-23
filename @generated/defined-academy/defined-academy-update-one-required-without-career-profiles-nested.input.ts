import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutCareerProfilesInput } from './defined-academy-create-without-career-profiles.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutCareerProfilesInput } from './defined-academy-create-or-connect-without-career-profiles.input';
import { DefinedAcademyUpsertWithoutCareerProfilesInput } from './defined-academy-upsert-without-career-profiles.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { DefinedAcademyUpdateToOneWithWhereWithoutCareerProfilesInput } from './defined-academy-update-to-one-with-where-without-career-profiles.input';

@InputType()
export class DefinedAcademyUpdateOneRequiredWithoutCareerProfilesNestedInput {

    @Field(() => DefinedAcademyCreateWithoutCareerProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutCareerProfilesInput)
    create?: DefinedAcademyCreateWithoutCareerProfilesInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutCareerProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutCareerProfilesInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutCareerProfilesInput;

    @Field(() => DefinedAcademyUpsertWithoutCareerProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyUpsertWithoutCareerProfilesInput)
    upsert?: DefinedAcademyUpsertWithoutCareerProfilesInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyUpdateToOneWithWhereWithoutCareerProfilesInput, {nullable:true})
    @Type(() => DefinedAcademyUpdateToOneWithWhereWithoutCareerProfilesInput)
    update?: DefinedAcademyUpdateToOneWithWhereWithoutCareerProfilesInput;
}
