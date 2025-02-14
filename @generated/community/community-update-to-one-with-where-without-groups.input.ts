import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityWhereInput } from './community-where.input';
import { Type } from 'class-transformer';
import { CommunityUpdateWithoutGroupsInput } from './community-update-without-groups.input';

@InputType()
export class CommunityUpdateToOneWithWhereWithoutGroupsInput {

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    where?: CommunityWhereInput;

    @Field(() => CommunityUpdateWithoutGroupsInput, {nullable:false})
    @Type(() => CommunityUpdateWithoutGroupsInput)
    data!: CommunityUpdateWithoutGroupsInput;
}
