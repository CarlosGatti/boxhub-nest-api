import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutResponsibleInspectionsInput } from './user-update-without-responsible-inspections.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutResponsibleInspectionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutResponsibleInspectionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutResponsibleInspectionsInput)
    data!: UserUpdateWithoutResponsibleInspectionsInput;
}
