import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeFormType } from '../prisma/defined-intake-form-type.enum';
import { DefinedIntakeFormStatus } from '../prisma/defined-intake-form-status.enum';
import { DefinedClient } from '../defined-client/defined-client.model';
import { DefinedProject } from '../defined-project/defined-project.model';
import { DefinedIntakeAnswer } from '../defined-intake-answer/defined-intake-answer.model';
import { DefinedIntakeFormCount } from './defined-intake-form-count.output';

@ObjectType()
export class DefinedIntakeForm {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:true})
    projectId!: number | null;

    @Field(() => DefinedIntakeFormType, {nullable:false})
    formType!: keyof typeof DefinedIntakeFormType;

    @Field(() => DefinedIntakeFormStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedIntakeFormStatus;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    shareToken!: string | null;

    @Field(() => Date, {nullable:true})
    shareTokenCreatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    shareTokenExpiresAt!: Date | null;

    @Field(() => Date, {nullable:true})
    shareRevokedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    submittedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedClient, {nullable:false})
    client?: DefinedClient;

    @Field(() => DefinedProject, {nullable:true})
    project?: DefinedProject | null;

    @Field(() => [DefinedIntakeAnswer], {nullable:true})
    answers?: Array<DefinedIntakeAnswer>;

    @Field(() => DefinedIntakeFormCount, {nullable:false})
    _count?: DefinedIntakeFormCount;
}
