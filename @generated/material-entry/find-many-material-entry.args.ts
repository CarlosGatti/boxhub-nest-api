import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialEntryWhereInput } from './material-entry-where.input';
import { Type } from 'class-transformer';
import { MaterialEntryOrderByWithRelationInput } from './material-entry-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MaterialEntryScalarFieldEnum } from './material-entry-scalar-field.enum';

@ArgsType()
export class FindManyMaterialEntryArgs {

    @Field(() => MaterialEntryWhereInput, {nullable:true})
    @Type(() => MaterialEntryWhereInput)
    where?: MaterialEntryWhereInput;

    @Field(() => [MaterialEntryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MaterialEntryOrderByWithRelationInput>;

    @Field(() => MaterialEntryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MaterialEntryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MaterialEntryScalarFieldEnum>;
}
