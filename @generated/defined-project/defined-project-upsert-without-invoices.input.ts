import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectUpdateWithoutInvoicesInput } from './defined-project-update-without-invoices.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutInvoicesInput } from './defined-project-create-without-invoices.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';

@InputType()
export class DefinedProjectUpsertWithoutInvoicesInput {

    @Field(() => DefinedProjectUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutInvoicesInput)
    update!: DefinedProjectUpdateWithoutInvoicesInput;

    @Field(() => DefinedProjectCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutInvoicesInput)
    create!: DefinedProjectCreateWithoutInvoicesInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;
}
