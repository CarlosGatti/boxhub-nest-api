import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunityCreateWithoutEventsInput } from './community-create-without-events.input';
import { Type } from 'class-transformer';
import { CommunityCreateOrConnectWithoutEventsInput } from './community-create-or-connect-without-events.input';
import { CommunityUpsertWithoutEventsInput } from './community-upsert-without-events.input';
import { CommunityWhereInput } from './community-where.input';
import { Prisma } from '@prisma/client';
import { CommunityWhereUniqueInput } from './community-where-unique.input';
import { CommunityUpdateToOneWithWhereWithoutEventsInput } from './community-update-to-one-with-where-without-events.input';

@InputType()
export class CommunityUpdateOneWithoutEventsNestedInput {

    @Field(() => CommunityCreateWithoutEventsInput, {nullable:true})
    @Type(() => CommunityCreateWithoutEventsInput)
    create?: CommunityCreateWithoutEventsInput;

    @Field(() => CommunityCreateOrConnectWithoutEventsInput, {nullable:true})
    @Type(() => CommunityCreateOrConnectWithoutEventsInput)
    connectOrCreate?: CommunityCreateOrConnectWithoutEventsInput;

    @Field(() => CommunityUpsertWithoutEventsInput, {nullable:true})
    @Type(() => CommunityUpsertWithoutEventsInput)
    upsert?: CommunityUpsertWithoutEventsInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    disconnect?: CommunityWhereInput;

    @Field(() => CommunityWhereInput, {nullable:true})
    @Type(() => CommunityWhereInput)
    delete?: CommunityWhereInput;

    @Field(() => CommunityWhereUniqueInput, {nullable:true})
    @Type(() => CommunityWhereUniqueInput)
    connect?: Prisma.AtLeast<CommunityWhereUniqueInput, 'id' | 'name' | 'communityPlanId'>;

    @Field(() => CommunityUpdateToOneWithWhereWithoutEventsInput, {nullable:true})
    @Type(() => CommunityUpdateToOneWithWhereWithoutEventsInput)
    update?: CommunityUpdateToOneWithWhereWithoutEventsInput;
}
