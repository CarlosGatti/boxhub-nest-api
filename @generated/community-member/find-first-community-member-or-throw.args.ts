import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityMemberWhereInput } from './community-member-where.input';
import { Type } from 'class-transformer';
import { CommunityMemberOrderByWithRelationInput } from './community-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CommunityMemberWhereUniqueInput } from './community-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommunityMemberScalarFieldEnum } from './community-member-scalar-field.enum';

@ArgsType()
export class FindFirstCommunityMemberOrThrowArgs {

    @Field(() => CommunityMemberWhereInput, {nullable:true})
    @Type(() => CommunityMemberWhereInput)
    where?: CommunityMemberWhereInput;

    @Field(() => [CommunityMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunityMemberOrderByWithRelationInput>;

    @Field(() => CommunityMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunityMemberWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CommunityMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommunityMemberScalarFieldEnum>;
}
