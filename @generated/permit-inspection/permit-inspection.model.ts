import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermitKind } from '../prisma/permit-kind.enum';
import { PermitStatus } from '../prisma/permit-status.enum';
import { User } from '../user/user.model';
import { Project } from '../project/project.model';

@ObjectType()
export class PermitInspection {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => PermitKind, {nullable:false})
    kind!: keyof typeof PermitKind;

    @Field(() => PermitStatus, {nullable:false,defaultValue:'REQUIRED'})
    status!: keyof typeof PermitStatus;

    @Field(() => Date, {nullable:true})
    requestedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    approvedAt!: Date | null;

    @Field(() => String, {nullable:true})
    fileUrl!: string | null;

    @Field(() => Int, {nullable:true})
    responsibleId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:true})
    responsible?: User | null;

    @Field(() => Project, {nullable:false})
    project?: Project;
}
