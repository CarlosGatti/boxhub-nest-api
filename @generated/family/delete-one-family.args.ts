import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneFamilyArgs {

    @Field(() => FamilyWhereUniqueInput, {nullable:false})
    @Type(() => FamilyWhereUniqueInput)
    where!: Prisma.AtLeast<FamilyWhereUniqueInput, 'id'>;
}
