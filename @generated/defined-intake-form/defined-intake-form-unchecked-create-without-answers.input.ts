import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeFormType } from '../prisma/defined-intake-form-type.enum';
import { DefinedIntakeFormStatus } from '../prisma/defined-intake-form-status.enum';

@InputType()
export class DefinedIntakeFormUncheckedCreateWithoutAnswersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => DefinedIntakeFormType, {nullable:false})
    formType!: keyof typeof DefinedIntakeFormType;

    @Field(() => DefinedIntakeFormStatus, {nullable:true})
    status?: keyof typeof DefinedIntakeFormStatus;

    @Field(() => String, {nullable:false})
    title!: string;

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
