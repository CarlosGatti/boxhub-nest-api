import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormCreateWithoutProjectInput } from './defined-intake-form-create-without-project.input';

@InputType()
export class DefinedIntakeFormCreateOrConnectWithoutProjectInput {

    @Field(() => DefinedIntakeFormWhereUniqueInput, {nullable:false})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedIntakeFormCreateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedIntakeFormCreateWithoutProjectInput)
    create!: DefinedIntakeFormCreateWithoutProjectInput;
}
