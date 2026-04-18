import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeFormUpdateInput } from './defined-intake-form-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';

@ArgsType()
export class UpdateOneDefinedIntakeFormArgs {

    @Field(() => DefinedIntakeFormUpdateInput, {nullable:false})
    @Type(() => DefinedIntakeFormUpdateInput)
    data!: DefinedIntakeFormUpdateInput;

    @Field(() => DefinedIntakeFormWhereUniqueInput, {nullable:false})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>;
}
