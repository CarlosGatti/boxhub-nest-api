import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeedCollectionCreatekeywordsInput } from './feed-collection-createkeywords.input';
import { FeedCollectionCreateblockedInput } from './feed-collection-createblocked.input';
import { FeedCollectionCreatepreferredDomainsInput } from './feed-collection-createpreferred-domains.input';

@InputType()
export class FeedCollectionCreateManyProfileInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => FeedCollectionCreatekeywordsInput, {nullable:true})
    keywords?: FeedCollectionCreatekeywordsInput;

    @Field(() => FeedCollectionCreateblockedInput, {nullable:true})
    blocked?: FeedCollectionCreateblockedInput;

    @Field(() => FeedCollectionCreatepreferredDomainsInput, {nullable:true})
    preferredDomains?: FeedCollectionCreatepreferredDomainsInput;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
