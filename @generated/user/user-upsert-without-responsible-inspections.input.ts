import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutResponsibleInspectionsInput } from './user-update-without-responsible-inspections.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutResponsibleInspectionsInput } from './user-create-without-responsible-inspections.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutResponsibleInspectionsInput {

    @Field(() => UserUpdateWithoutResponsibleInspectionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutResponsibleInspectionsInput)
    update!: UserUpdateWithoutResponsibleInspectionsInput;

    @Field(() => UserCreateWithoutResponsibleInspectionsInput, {nullable:false})
    @Type(() => UserCreateWithoutResponsibleInspectionsInput)
    create!: UserCreateWithoutResponsibleInspectionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
