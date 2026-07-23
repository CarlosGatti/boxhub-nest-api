import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDefinedAcademyCareerProfilesInput } from './user-update-without-defined-academy-career-profiles.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDefinedAcademyCareerProfilesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDefinedAcademyCareerProfilesInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyCareerProfilesInput)
    data!: UserUpdateWithoutDefinedAcademyCareerProfilesInput;
}
