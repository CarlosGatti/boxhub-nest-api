import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityWhereInput } from './community-where.input';
import { Type } from 'class-transformer';
import { CommunityUpdateWithoutMembersInput } from './community-update-without-members.input';

@InputType()
export class CommunityUpdateToOneWithWhereWithoutMembersInput {

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;

    @Field(() => CommunityUpdateWithoutMembersInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutMembersInput)
    data!: CommunityUpdateWithoutMembersInput;
}
