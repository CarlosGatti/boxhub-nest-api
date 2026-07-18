import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDefinedAcademyOrThrowArgs {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;
}
