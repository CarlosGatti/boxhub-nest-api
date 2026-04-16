import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectServiceType } from '../prisma/defined-project-service-type.enum';
import { DefinedProjectStatus } from '../prisma/defined-project-status.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedInternalNoteCreateNestedManyWithoutProjectInput } from '../defined-internal-note/defined-internal-note-create-nested-many-without-project.input';

@InputType()
export class DefinedProjectCreateWithoutClientInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DefinedProjectServiceType, {nullable:false})
    serviceType!: keyof typeof DefinedProjectServiceType;

    @Field(() => DefinedProjectStatus, {nullable:true})
    status?: keyof typeof DefinedProjectStatus;

    @Field(() => Float, {nullable:true})
    budget?: number;

    @Field(() => Date, {nullable:true})
    deadline?: Date | string;

    @Field(() => String, {nullable:true})
    source?: string;

    @Field(() => String, {nullable:true})
    assignedTo?: string;

    @Field(() => Int, {nullable:true})
    supplierId?: number;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedInternalNoteCreateNestedManyWithoutProjectInput, {nullable:true})
    internalNotes?: DefinedInternalNoteCreateNestedManyWithoutProjectInput;
}
