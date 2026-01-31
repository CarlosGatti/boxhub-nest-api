import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedProfileCreateWithoutUserInput } from './feed-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedProfileCreateOrConnectWithoutUserInput } from './feed-profile-create-or-connect-without-user.input';
import { FeedProfileUpsertWithoutUserInput } from './feed-profile-upsert-without-user.input';
import { FeedProfileWhereInput } from './feed-profile-where.input';
import { Prisma } from '@prisma/client';
import { FeedProfileWhereUniqueInput } from './feed-profile-where-unique.input';
import { FeedProfileUpdateToOneWithWhereWithoutUserInput } from './feed-profile-update-to-one-with-where-without-user.input';

@InputType()
export class FeedProfileUpdateOneWithoutUserNestedInput {

    @Field(() => FeedProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => FeedProfileCreateWithoutUserInput)
    create?: FeedProfileCreateWithoutUserInput;

    @Field(() => FeedProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => FeedProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: FeedProfileCreateOrConnectWithoutUserInput;

    @Field(() => FeedProfileUpsertWithoutUserInput, {nullable:true})
    @Type(() => FeedProfileUpsertWithoutUserInput)
    upsert?: FeedProfileUpsertWithoutUserInput;

    @Field(() => FeedProfileWhereInput, {nullable:true})
    @Type(() => FeedProfileWhereInput)
    disconnect?: FeedProfileWhereInput;

    @Field(() => FeedProfileWhereInput, {nullable:true})
    @Type(() => FeedProfileWhereInput)
    delete?: FeedProfileWhereInput;

    @Field(() => FeedProfileWhereUniqueInput, {nullable:true})
    @Type(() => FeedProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedProfileWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => FeedProfileUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => FeedProfileUpdateToOneWithWhereWithoutUserInput)
    update?: FeedProfileUpdateToOneWithWhereWithoutUserInput;
}
