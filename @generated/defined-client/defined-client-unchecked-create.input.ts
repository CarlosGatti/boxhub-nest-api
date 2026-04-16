import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedClientType } from '../prisma/defined-client-type.enum';
import { DefinedProjectUncheckedCreateNestedManyWithoutClientInput } from '../defined-project/defined-project-unchecked-create-nested-many-without-client.input';
import { DefinedInternalNoteUncheckedCreateNestedManyWithoutClientInput } from '../defined-internal-note/defined-internal-note-unchecked-create-nested-many-without-client.input';

@InputType()
export class DefinedClientUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => DefinedClientType, {nullable:false})
    type!: keyof typeof DefinedClientType;

    @Field(() => String, {nullable:true})
    companyName?: string;

    @Field(() => String, {nullable:true})
    legalName?: string;

    @Field(() => String, {nullable:false})
    contactName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    instagram?: string;

    @Field(() => String, {nullable:true})
    facebook?: string;

    @Field(() => String, {nullable:true})
    addressLine1?: string;

    @Field(() => String, {nullable:true})
    addressLine2?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    postalCode?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    businessType?: string;

    @Field(() => String, {nullable:true})
    serviceArea?: string;

    @Field(() => Int, {nullable:true})
    yearsInBusiness?: number;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedProjectUncheckedCreateNestedManyWithoutClientInput, {nullable:true})
    projects?: DefinedProjectUncheckedCreateNestedManyWithoutClientInput;

    @Field(() => DefinedInternalNoteUncheckedCreateNestedManyWithoutClientInput, {nullable:true})
    internalNotes?: DefinedInternalNoteUncheckedCreateNestedManyWithoutClientInput;
}
