import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyModuleUpdateInput } from './defined-academy-module-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyModuleWhereUniqueInput } from './defined-academy-module-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyModuleArgs {

    @Field(() => DefinedAcademyModuleUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyModuleUpdateInput)
    data!: DefinedAcademyModuleUpdateInput;

    @Field(() => DefinedAcademyModuleWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>;
}
