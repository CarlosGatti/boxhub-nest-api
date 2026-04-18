import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProjectServiceType } from '../prisma/defined-project-service-type.enum';
import { DefinedProjectStatus } from '../prisma/defined-project-status.enum';
import { Float } from '@nestjs/graphql';
import { DefinedClient } from '../defined-client/defined-client.model';
import { DefinedInternalNote } from '../defined-internal-note/defined-internal-note.model';
import { DefinedIntakeForm } from '../defined-intake-form/defined-intake-form.model';
import { DefinedProjectCount } from './defined-project-count.output';

@ObjectType()
export class DefinedProject {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DefinedProjectServiceType, {nullable:false})
    serviceType!: keyof typeof DefinedProjectServiceType;

    @Field(() => DefinedProjectStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedProjectStatus;

    @Field(() => Float, {nullable:true})
    budget!: number | null;

    @Field(() => Date, {nullable:true})
    deadline!: Date | null;

    @Field(() => String, {nullable:true})
    source!: string | null;

    @Field(() => String, {nullable:true})
    assignedTo!: string | null;

    @Field(() => Int, {nullable:true})
    supplierId!: number | null;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedClient, {nullable:false})
    client?: DefinedClient;

    @Field(() => [DefinedInternalNote], {nullable:true})
    internalNotes?: Array<DefinedInternalNote>;

    @Field(() => [DefinedIntakeForm], {nullable:true})
    intakeForms?: Array<DefinedIntakeForm>;

    @Field(() => DefinedProjectCount, {nullable:false})
    _count?: DefinedProjectCount;
}
