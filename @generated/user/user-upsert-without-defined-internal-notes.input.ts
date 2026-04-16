import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDefinedInternalNotesInput } from './user-update-without-defined-internal-notes.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedInternalNotesInput } from './user-create-without-defined-internal-notes.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDefinedInternalNotesInput {

    @Field(() => UserUpdateWithoutDefinedInternalNotesInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedInternalNotesInput)
    update!: UserUpdateWithoutDefinedInternalNotesInput;

    @Field(() => UserCreateWithoutDefinedInternalNotesInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedInternalNotesInput)
    create!: UserCreateWithoutDefinedInternalNotesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
