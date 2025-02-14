import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutEventsInput } from './community-create-without-events.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutEventsInput } from './community-create-or-connect-without-events.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';

@InputType()
export class CommunityCreateNestedOneWithoutEventsInput {

    @Field(() => CommunityCreateWithoutEventsInput, {nullable:true})
    @Type(() => CommunityCreateWithoutEventsInput)
    create?: CommunityCreateWithoutEventsInput;

    @Field(() => CommunityCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutEventsInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutEventsInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;
}
