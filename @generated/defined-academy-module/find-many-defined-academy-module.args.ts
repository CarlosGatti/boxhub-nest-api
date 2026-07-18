import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyModuleWhereInput } from './defined-academy-module-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleOrderByWithRelationInput } from './defined-academy-module-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyModuleWhereUniqueInput } from './defined-academy-module-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyModuleScalarFieldEnum } from './defined-academy-module-scalar-field.enum';

@ArgsType()
export class FindManyDefinedAcademyModuleArgs {

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    @Type(() => DefinedAcademyModuleWhereInput)
    where?: DefinedAcademyModuleWhereInput;

    @Field(() => [DefinedAcademyModuleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyModuleOrderByWithRelationInput>;

    @Field(() => DefinedAcademyModuleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyModuleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyModuleScalarFieldEnum>;
}
