import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateInput } from './defined-academy-create.input';
import { DefinedAcademyUpdateInput } from './defined-academy-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyArgs {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyCreateInput, {nullable:false})
    @Type(() => DefinedAcademyCreateInput)
    create!: DefinedAcademyCreateInput;

    @Field(() => DefinedAcademyUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateInput)
    update!: DefinedAcademyUpdateInput;
}
