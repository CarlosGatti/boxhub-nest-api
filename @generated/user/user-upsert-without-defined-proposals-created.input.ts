import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDefinedProposalsCreatedInput } from './user-update-without-defined-proposals-created.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedProposalsCreatedInput } from './user-create-without-defined-proposals-created.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDefinedProposalsCreatedInput {

    @Field(() => UserUpdateWithoutDefinedProposalsCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedProposalsCreatedInput)
    update!: UserUpdateWithoutDefinedProposalsCreatedInput;

    @Field(() => UserCreateWithoutDefinedProposalsCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedProposalsCreatedInput)
    create!: UserCreateWithoutDefinedProposalsCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
