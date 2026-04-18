import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutIntakeFormsInput } from './defined-client-create-without-intake-forms.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutIntakeFormsInput } from './defined-client-create-or-connect-without-intake-forms.input';
import { DefinedClientUpsertWithoutIntakeFormsInput } from './defined-client-upsert-without-intake-forms.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { DefinedClientUpdateToOneWithWhereWithoutIntakeFormsInput } from './defined-client-update-to-one-with-where-without-intake-forms.input';

@InputType()
export class DefinedClientUpdateOneRequiredWithoutIntakeFormsNestedInput {

    @Field(() => DefinedClientCreateWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutIntakeFormsInput)
    create?: DefinedClientCreateWithoutIntakeFormsInput;

    @Field(() => DefinedClientCreateOrConnectWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutIntakeFormsInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutIntakeFormsInput;

    @Field(() => DefinedClientUpsertWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedClientUpsertWithoutIntakeFormsInput)
    upsert?: DefinedClientUpsertWithoutIntakeFormsInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientUpdateToOneWithWhereWithoutIntakeFormsInput, {nullable:true})
    @Type(() => DefinedClientUpdateToOneWithWhereWithoutIntakeFormsInput)
    update?: DefinedClientUpdateToOneWithWhereWithoutIntakeFormsInput;
}
