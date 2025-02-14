import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityUpdateWithoutMembersInput } from './community-update-without-members.input';
import { Type } from 'class-transformer';
import { CommunityCreateWithoutMembersInput } from './community-create-without-members.input';
import { CommunityWhereInput } from './community-where.input';

@InputType()
export class CommunityUpsertWithoutMembersInput {

    @Field(() => CommunityUpdateWithoutMembersInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutMembersInput)
    update!: CommunityUpdateWithoutMembersInput;

    @Field(() => CommunityCreateWithoutMembersInput, {nullable:false})
    @Type(() => CommunityCreateWithoutMembersInput)
    create!: CommunityCreateWithoutMembersInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;
}
