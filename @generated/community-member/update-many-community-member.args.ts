import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityMemberUpdateManyMutationInput } from './community-member-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommunityMemberWhereInput } from './community-member-where.input';

@ArgsType()
export class UpdateManyCommunityMemberArgs {

    @Field(() => CommunityMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => CommunityMemberUpdateManyMutationInput)
    data!: CommunityMemberUpdateManyMutationInput;

    @Field(() => CommunityMemberWhereInput, {nullable:true})
    @Type(() => CommunityMemberWhereInput)
    where?: CommunityMemberWhereInput;
}
