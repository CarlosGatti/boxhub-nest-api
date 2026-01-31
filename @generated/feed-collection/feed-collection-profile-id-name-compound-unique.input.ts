import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class FeedCollectionProfileIdNameCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
