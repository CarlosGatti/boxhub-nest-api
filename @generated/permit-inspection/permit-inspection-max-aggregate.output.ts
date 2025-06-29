import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermitKind } from '../prisma/permit-kind.enum';
import { PermitStatus } from '../prisma/permit-status.enum';

@ObjectType()
export class PermitInspectionMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => String, {nullable:true})
    number?: string;

    @Field(() => PermitKind, {nullable:true})
    kind?: keyof typeof PermitKind;

    @Field(() => PermitStatus, {nullable:true})
    status?: keyof typeof PermitStatus;

    @Field(() => Date, {nullable:true})
    requestedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    approvedAt?: Date | string;

    @Field(() => String, {nullable:true})
    fileUrl?: string;

    @Field(() => Int, {nullable:true})
    responsibleId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
