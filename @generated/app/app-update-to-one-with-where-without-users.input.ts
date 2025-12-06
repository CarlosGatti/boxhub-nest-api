import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';
import { Type } from 'class-transformer';
import { AppUpdateWithoutUsersInput } from './app-update-without-users.input';

@InputType()
export class AppUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;

    @Field(() => AppUpdateWithoutUsersInput, {nullable:false})
    @Type(() => AppUpdateWithoutUsersInput)
    data!: AppUpdateWithoutUsersInput;
}
