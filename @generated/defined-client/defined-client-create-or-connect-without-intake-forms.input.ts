import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutIntakeFormsInput } from './defined-client-create-without-intake-forms.input';

@InputType()
export class DefinedClientCreateOrConnectWithoutIntakeFormsInput {

    @Field(() => DefinedClientWhereUniqueInput, {nullable:false})
    @Type(() => DefinedClientWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientCreateWithoutIntakeFormsInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutIntakeFormsInput)
    create!: DefinedClientCreateWithoutIntakeFormsInput;
}
