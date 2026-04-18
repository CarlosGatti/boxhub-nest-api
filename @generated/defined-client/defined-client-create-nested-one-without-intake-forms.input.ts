import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutIntakeFormsInput } from './defined-client-create-without-intake-forms.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutIntakeFormsInput } from './defined-client-create-or-connect-without-intake-forms.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';

@InputType()
export class DefinedClientCreateNestedOneWithoutIntakeFormsInput {

    @Field(() => DefinedClientCreateWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutIntakeFormsInput)
    create?: DefinedClientCreateWithoutIntakeFormsInput;

    @Field(() => DefinedClientCreateOrConnectWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutIntakeFormsInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutIntakeFormsInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;
}
