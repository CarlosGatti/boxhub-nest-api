import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppUpdateWithoutUsersInput } from './app-update-without-users.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutUsersInput } from './app-create-without-users.input';
import { AppWhereInput } from './app-where.input';

@InputType()
export class AppUpsertWithoutUsersInput {

    @Field(() => AppUpdateWithoutUsersInput, {nullable:false})
    @Type(() => AppUpdateWithoutUsersInput)
    update!: AppUpdateWithoutUsersInput;

    @Field(() => AppCreateWithoutUsersInput, {nullable:false})
    @Type(() => AppCreateWithoutUsersInput)
    create!: AppCreateWithoutUsersInput;

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;
}
