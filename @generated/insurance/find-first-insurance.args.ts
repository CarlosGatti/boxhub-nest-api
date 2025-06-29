import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InsuranceWhereInput } from './insurance-where.input';
import { Type } from 'class-transformer';
import { InsuranceOrderByWithRelationInput } from './insurance-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { InsuranceWhereUniqueInput } from './insurance-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InsuranceScalarFieldEnum } from './insurance-scalar-field.enum';

@ArgsType()
export class FindFirstInsuranceArgs {

    @Field(() => InsuranceWhereInput, {nullable:true})
    @Type(() => InsuranceWhereInput)
    where?: InsuranceWhereInput;

    @Field(() => [InsuranceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InsuranceOrderByWithRelationInput>;

    @Field(() => InsuranceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InsuranceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InsuranceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof InsuranceScalarFieldEnum>;
}
