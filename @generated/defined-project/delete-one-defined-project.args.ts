import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDefinedProjectArgs {

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;
}
