import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    nickname?: true;

    @Field(() => Boolean, {nullable:true})
    public?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @Field(() => Boolean, {nullable:true})
    emailVerified?: true;

    @Field(() => Boolean, {nullable:true})
    profilePicture?: true;

    @Field(() => Boolean, {nullable:true})
    about?: true;

    @Field(() => Boolean, {nullable:true})
    linkedinUrl?: true;

    @Field(() => Boolean, {nullable:true})
    twitterUrl?: true;

    @Field(() => Boolean, {nullable:true})
    githubUrl?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    isPremium?: true;

    @Field(() => Boolean, {nullable:true})
    subscriptionId?: true;

    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;

    @Field(() => Boolean, {nullable:true})
    willExpireAt?: true;
}
