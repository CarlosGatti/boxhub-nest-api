import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutInvoicesInput } from './defined-project-create-without-invoices.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutInvoicesInput } from './defined-project-create-or-connect-without-invoices.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';

@InputType()
export class DefinedProjectCreateNestedOneWithoutInvoicesInput {

    @Field(() => DefinedProjectCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutInvoicesInput)
    create?: DefinedProjectCreateWithoutInvoicesInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutInvoicesInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;
}
