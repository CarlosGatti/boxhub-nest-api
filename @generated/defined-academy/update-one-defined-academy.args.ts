import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUpdateInput } from './defined-academy-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyArgs {

    @Field(() => DefinedAcademyUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateInput)
    data!: DefinedAcademyUpdateInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;
}
