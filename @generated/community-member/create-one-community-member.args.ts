import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityMemberCreateInput } from './community-member-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCommunityMemberArgs {

    @Field(() => CommunityMemberCreateInput, {nullable:false})
    @Type(() => CommunityMemberCreateInput)
    data!: CommunityMemberCreateInput;
}
