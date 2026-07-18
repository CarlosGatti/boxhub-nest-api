import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDefinedAcademyCoursesCreatedInput } from './user-update-without-defined-academy-courses-created.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyCoursesCreatedInput } from './user-create-without-defined-academy-courses-created.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDefinedAcademyCoursesCreatedInput {

    @Field(() => UserUpdateWithoutDefinedAcademyCoursesCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyCoursesCreatedInput)
    update!: UserUpdateWithoutDefinedAcademyCoursesCreatedInput;

    @Field(() => UserCreateWithoutDefinedAcademyCoursesCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyCoursesCreatedInput)
    create!: UserCreateWithoutDefinedAcademyCoursesCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
