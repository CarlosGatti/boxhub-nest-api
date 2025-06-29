import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermitKind } from '../prisma/permit-kind.enum';
import { PermitStatus } from '../prisma/permit-status.enum';
import { ProjectCreateNestedOneWithoutPermitsInput } from '../project/project-create-nested-one-without-permits.input';

@InputType()
export class PermitInspectionCreateWithoutResponsibleInput {

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

    @Field(() => ProjectCreateNestedOneWithoutPermitsInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutPermitsInput;
}
