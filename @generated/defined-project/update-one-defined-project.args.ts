import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedProjectUpdateInput } from './defined-project-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';

@ArgsType()
export class UpdateOneDefinedProjectArgs {

    @Field(() => DefinedProjectUpdateInput, {nullable:false})
    @Type(() => DefinedProjectUpdateInput)
    data!: DefinedProjectUpdateInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;
}
