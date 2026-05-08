import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutInvoicesInput } from './defined-project-create-without-invoices.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutInvoicesInput } from './defined-project-create-or-connect-without-invoices.input';
import { DefinedProjectUpsertWithoutInvoicesInput } from './defined-project-upsert-without-invoices.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { DefinedProjectUpdateToOneWithWhereWithoutInvoicesInput } from './defined-project-update-to-one-with-where-without-invoices.input';

@InputType()
export class DefinedProjectUpdateOneRequiredWithoutInvoicesNestedInput {

    @Field(() => DefinedProjectCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutInvoicesInput)
    create?: DefinedProjectCreateWithoutInvoicesInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutInvoicesInput;

    @Field(() => DefinedProjectUpsertWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedProjectUpsertWithoutInvoicesInput)
    upsert?: DefinedProjectUpsertWithoutInvoicesInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectUpdateToOneWithWhereWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedProjectUpdateToOneWithWhereWithoutInvoicesInput)
    update?: DefinedProjectUpdateToOneWithWhereWithoutInvoicesInput;
}
