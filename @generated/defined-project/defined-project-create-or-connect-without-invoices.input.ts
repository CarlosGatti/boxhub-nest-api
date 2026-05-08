import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutInvoicesInput } from './defined-project-create-without-invoices.input';

@InputType()
export class DefinedProjectCreateOrConnectWithoutInvoicesInput {

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutInvoicesInput)
    create!: DefinedProjectCreateWithoutInvoicesInput;
}
