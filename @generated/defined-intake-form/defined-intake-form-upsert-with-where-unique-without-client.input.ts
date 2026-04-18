import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormUpdateWithoutClientInput } from './defined-intake-form-update-without-client.input';
import { DefinedIntakeFormCreateWithoutClientInput } from './defined-intake-form-create-without-client.input';

@InputType()
export class DefinedIntakeFormUpsertWithWhereUniqueWithoutClientInput {

    @Field(() => DefinedIntakeFormWhereUniqueInput, {nullable:false})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedIntakeFormUpdateWithoutClientInput, {nullable:false})
    @Type(() => DefinedIntakeFormUpdateWithoutClientInput)
    update!: DefinedIntakeFormUpdateWithoutClientInput;

    @Field(() => DefinedIntakeFormCreateWithoutClientInput, {nullable:false})
    @Type(() => DefinedIntakeFormCreateWithoutClientInput)
    create!: DefinedIntakeFormCreateWithoutClientInput;
}
