import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDefinedAcademyCoursesCreatedInput } from './user-update-without-defined-academy-courses-created.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDefinedAcademyCoursesCreatedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDefinedAcademyCoursesCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyCoursesCreatedInput)
    data!: UserUpdateWithoutDefinedAcademyCoursesCreatedInput;
}
