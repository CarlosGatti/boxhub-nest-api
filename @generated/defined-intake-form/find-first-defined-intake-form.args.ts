import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeFormWhereInput } from './defined-intake-form-where.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormOrderByWithRelationInput } from './defined-intake-form-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeFormScalarFieldEnum } from './defined-intake-form-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedIntakeFormArgs {

    @Field(() => DefinedIntakeFormWhereInput, {nullable:true})
    @Type(() => DefinedIntakeFormWhereInput)
    where?: DefinedIntakeFormWhereInput;

    @Field(() => [DefinedIntakeFormOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedIntakeFormOrderByWithRelationInput>;

    @Field(() => DefinedIntakeFormWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedIntakeFormScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedIntakeFormScalarFieldEnum>;
}
