import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProjectResponsibleInput } from './user-update-without-project-responsible.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProjectResponsibleInput } from './user-create-without-project-responsible.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutProjectResponsibleInput {

    @Field(() => UserUpdateWithoutProjectResponsibleInput, {nullable:false})
    @Type(() => UserUpdateWithoutProjectResponsibleInput)
    update!: UserUpdateWithoutProjectResponsibleInput;

    @Field(() => UserCreateWithoutProjectResponsibleInput, {nullable:false})
    @Type(() => UserCreateWithoutProjectResponsibleInput)
    create!: UserCreateWithoutProjectResponsibleInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
