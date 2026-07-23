import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDefinedAcademyCareerProfilesInput } from './user-update-without-defined-academy-career-profiles.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyCareerProfilesInput } from './user-create-without-defined-academy-career-profiles.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDefinedAcademyCareerProfilesInput {

    @Field(() => UserUpdateWithoutDefinedAcademyCareerProfilesInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyCareerProfilesInput)
    update!: UserUpdateWithoutDefinedAcademyCareerProfilesInput;

    @Field(() => UserCreateWithoutDefinedAcademyCareerProfilesInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyCareerProfilesInput)
    create!: UserCreateWithoutDefinedAcademyCareerProfilesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
