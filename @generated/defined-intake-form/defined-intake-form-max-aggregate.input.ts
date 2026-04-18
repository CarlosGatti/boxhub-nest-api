import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedIntakeFormMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    clientId?: true;

    @Field(() => Boolean, {nullable:true})
    projectId?: true;

    @Field(() => Boolean, {nullable:true})
    formType?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    shareToken?: true;

    @Field(() => Boolean, {nullable:true})
    shareTokenCreatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    shareTokenExpiresAt?: true;

    @Field(() => Boolean, {nullable:true})
    shareRevokedAt?: true;

    @Field(() => Boolean, {nullable:true})
    submittedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
