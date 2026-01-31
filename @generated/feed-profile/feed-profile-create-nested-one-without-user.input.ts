import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedProfileCreateWithoutUserInput } from './feed-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { FeedProfileCreateOrConnectWithoutUserInput } from './feed-profile-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { FeedProfileWhereUniqueInput } from './feed-profile-where-unique.input';

@InputType()
export class FeedProfileCreateNestedOneWithoutUserInput {

    @Field(() => FeedProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => FeedProfileCreateWithoutUserInput)
    create?: FeedProfileCreateWithoutUserInput;

    @Field(() => FeedProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => FeedProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: FeedProfileCreateOrConnectWithoutUserInput;

    @Field(() => FeedProfileWhereUniqueInput, {nullable:true})
    @Type(() => FeedProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedProfileWhereUniqueInput, 'id' | 'userId'>;
}
