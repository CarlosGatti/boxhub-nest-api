import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeFormType } from '../prisma/defined-intake-form-type.enum';
import { DefinedIntakeFormStatus } from '../prisma/defined-intake-form-status.enum';

@ObjectType()
export class DefinedIntakeFormMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    clientId?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => DefinedIntakeFormType, {nullable:true})
    formType?: keyof typeof DefinedIntakeFormType;

    @Field(() => DefinedIntakeFormStatus, {nullable:true})
    status?: keyof typeof DefinedIntakeFormStatus;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    shareToken?: string;

    @Field(() => Date, {nullable:true})
    shareTokenCreatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    shareTokenExpiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    shareRevokedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    submittedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
