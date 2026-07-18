import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDefinedAcademyEnrollmentsInput } from './user-update-without-defined-academy-enrollments.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDefinedAcademyEnrollmentsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDefinedAcademyEnrollmentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedAcademyEnrollmentsInput)
    data!: UserUpdateWithoutDefinedAcademyEnrollmentsInput;
}
