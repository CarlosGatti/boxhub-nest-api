import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityMemberScalarWhereInput } from './community-member-scalar-where.input';
import { Type } from 'class-transformer';
import { CommunityMemberUpdateManyMutationInput } from './community-member-update-many-mutation.input';

@InputType()
export class CommunityMemberUpdateManyWithWhereWithoutUserInput {

    @Field(() => CommunityMemberScalarWhereInput, {nullable:false})
    @Type(() => CommunityMemberScalarWhereInput)
    where!: CommunityMemberScalarWhereInput;

    @Field(() => CommunityMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => CommunityMemberUpdateManyMutationInput)
    data!: CommunityMemberUpdateManyMutationInput;
}
