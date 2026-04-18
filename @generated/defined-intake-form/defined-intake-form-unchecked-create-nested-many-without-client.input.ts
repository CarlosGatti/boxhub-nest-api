import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormCreateWithoutClientInput } from './defined-intake-form-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormCreateOrConnectWithoutClientInput } from './defined-intake-form-create-or-connect-without-client.input';
import { DefinedIntakeFormCreateManyClientInputEnvelope } from './defined-intake-form-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';

@InputType()
export class DefinedIntakeFormUncheckedCreateNestedManyWithoutClientInput {

    @Field(() => [DefinedIntakeFormCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedIntakeFormCreateWithoutClientInput)
    create?: Array<DefinedIntakeFormCreateWithoutClientInput>;

    @Field(() => [DefinedIntakeFormCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedIntakeFormCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedIntakeFormCreateOrConnectWithoutClientInput>;

    @Field(() => DefinedIntakeFormCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedIntakeFormCreateManyClientInputEnvelope)
    createMany?: DefinedIntakeFormCreateManyClientInputEnvelope;

    @Field(() => [DefinedIntakeFormWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>>;
}
