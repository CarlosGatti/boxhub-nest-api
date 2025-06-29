import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Insurance } from '../insurance/insurance.model';
import { SubcontractorCount } from './subcontractor-count.output';

@ObjectType()
export class Subcontractor {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    companyName!: string;

    @Field(() => String, {nullable:false})
    contactName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    trade!: string;

    @Field(() => String, {nullable:false})
    bankAccount!: string;

    @Field(() => String, {nullable:false})
    paymentPreference!: string;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    priority!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    createdViaPublicForm!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Insurance], {nullable:true})
    insurances?: Array<Insurance>;

    @Field(() => SubcontractorCount, {nullable:false})
    _count?: SubcontractorCount;
}
