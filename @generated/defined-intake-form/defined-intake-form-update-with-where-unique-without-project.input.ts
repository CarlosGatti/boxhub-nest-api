import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormUpdateWithoutProjectInput } from './defined-intake-form-update-without-project.input';

@InputType()
export class DefinedIntakeFormUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => DefinedIntakeFormWhereUniqueInput, {nullable:false})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedIntakeFormUpdateWithoutProjectInput, {nullable:false})
    @Type(() => DefinedIntakeFormUpdateWithoutProjectInput)
    data!: DefinedIntakeFormUpdateWithoutProjectInput;
}
