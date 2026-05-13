import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDefinedProposalsCreatedInput } from './user-update-without-defined-proposals-created.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDefinedProposalsCreatedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDefinedProposalsCreatedInput, {nullable:false})
    @Type(() => UserUpdateWithoutDefinedProposalsCreatedInput)
    data!: UserUpdateWithoutDefinedProposalsCreatedInput;
}
