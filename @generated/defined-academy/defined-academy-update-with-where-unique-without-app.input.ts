import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateWithoutAppInput } from './defined-academy-update-without-app.input';

@InputType()
export class DefinedAcademyUpdateWithWhereUniqueWithoutAppInput {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyUpdateWithoutAppInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutAppInput)
    data!: DefinedAcademyUpdateWithoutAppInput;
}
