import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormCreateInput } from './defined-intake-form-create.input';
import { DefinedIntakeFormUpdateInput } from './defined-intake-form-update.input';

@ArgsType()
export class UpsertOneDefinedIntakeFormArgs {

    @Field(() => DefinedIntakeFormWhereUniqueInput, {nullable:false})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => DefinedIntakeFormCreateInput, {nullable:false})
    @Type(() => DefinedIntakeFormCreateInput)
    create!: DefinedIntakeFormCreateInput;

    @Field(() => DefinedIntakeFormUpdateInput, {nullable:false})
    @Type(() => DefinedIntakeFormUpdateInput)
    update!: DefinedIntakeFormUpdateInput;
}
