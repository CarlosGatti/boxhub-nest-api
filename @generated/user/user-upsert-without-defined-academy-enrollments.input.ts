import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDefinedAcademyEnrollmentsInput } from './user-update-without-defined-academy-enrollments.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyEnrollmentsInput } from './user-create-without-defined-academy-enrollments.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDefinedAcademyEnrollmentsInput {

    @Field(() => UserUpdateWithoutDefinedAcademyEnrollmentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyEnrollmentsInput)
    update!: UserUpdateWithoutDefinedAcademyEnrollmentsInput;

    @Field(() => UserCreateWithoutDefinedAcademyEnrollmentsInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyEnrollmentsInput)
    create!: UserCreateWithoutDefinedAcademyEnrollmentsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
