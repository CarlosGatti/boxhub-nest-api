import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDefinedInternalNotesInput } from './user-update-without-defined-internal-notes.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDefinedInternalNotesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDefinedInternalNotesInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedInternalNotesInput)
    data!: UserUpdateWithoutDefinedInternalNotesInput;
}
