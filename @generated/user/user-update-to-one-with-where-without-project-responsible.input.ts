import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutProjectResponsibleInput } from './user-update-without-project-responsible.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutProjectResponsibleInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutProjectResponsibleInput, {nullable:false})
    @Type(() => UserUpdateWithoutProjectResponsibleInput)
    data!: UserUpdateWithoutProjectResponsibleInput;
}
