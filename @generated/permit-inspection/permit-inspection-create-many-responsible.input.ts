import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermitKind } from '../prisma/permit-kind.enum';
import { PermitStatus } from '../prisma/permit-status.enum';

@InputType()
export class PermitInspectionCreateManyResponsibleInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => PermitKind, {nullable:false})
    kind!: keyof typeof PermitKind;

    @Field(() => PermitStatus, {nullable:true})
    status?: keyof typeof PermitStatus;

    @Field(() => Date, {nullable:true})
    requestedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    approvedAt?: Date | string;

    @Field(() => String, {nullable:true})
    fileUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
