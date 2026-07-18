import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateInput } from './defined-academy-resource-create.input';
import { DefinedAcademyResourceUpdateInput } from './defined-academy-resource-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyResourceArgs {

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceCreateInput, {nullable:false})
    @Type(() => DefinedAcademyResourceCreateInput)
    create!: DefinedAcademyResourceCreateInput;

    @Field(() => DefinedAcademyResourceUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateInput)
    update!: DefinedAcademyResourceUpdateInput;
}
