import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyResourceUpdateInput } from './defined-academy-resource-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyResourceArgs {

    @Field(() => DefinedAcademyResourceUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateInput)
    data!: DefinedAcademyResourceUpdateInput;

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;
}
