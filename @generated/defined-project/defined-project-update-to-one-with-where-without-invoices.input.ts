import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateWithoutInvoicesInput } from './defined-project-update-without-invoices.input';

@InputType()
export class DefinedProjectUpdateToOneWithWhereWithoutInvoicesInput {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutInvoicesInput)
    data!: DefinedProjectUpdateWithoutInvoicesInput;
}
