import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { DefinedClientType } from '../prisma/defined-client-type.enum';
import { Int } from '@nestjs/graphql';
import { DefinedProject } from '../defined-project/defined-project.model';
import { DefinedInternalNote } from '../defined-internal-note/defined-internal-note.model';
import { DefinedClientCount } from './defined-client-count.output';

@ObjectType()
export class DefinedClient {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => DefinedClientType, {nullable:false})
    type!: keyof typeof DefinedClientType;

    @Field(() => String, {nullable:true})
    companyName!: string | null;

    @Field(() => String, {nullable:true})
    legalName!: string | null;

    @Field(() => String, {nullable:false})
    contactName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    instagram!: string | null;

    @Field(() => String, {nullable:true})
    facebook!: string | null;

    @Field(() => String, {nullable:true})
    addressLine1!: string | null;

    @Field(() => String, {nullable:true})
    addressLine2!: string | null;

    @Field(() => String, {nullable:true})
    city!: string | null;

    @Field(() => String, {nullable:true})
    state!: string | null;

    @Field(() => String, {nullable:true})
    postalCode!: string | null;

    @Field(() => String, {nullable:true})
    country!: string | null;

    @Field(() => String, {nullable:true})
    businessType!: string | null;

    @Field(() => String, {nullable:true})
    serviceArea!: string | null;

    @Field(() => Int, {nullable:true})
    yearsInBusiness!: number | null;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [DefinedProject], {nullable:true})
    projects?: Array<DefinedProject>;

    @Field(() => [DefinedInternalNote], {nullable:true})
    internalNotes?: Array<DefinedInternalNote>;

    @Field(() => DefinedClientCount, {nullable:false})
    _count?: DefinedClientCount;
}
