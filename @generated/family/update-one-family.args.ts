import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyUpdateInput } from './family-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FamilyWhereUniqueInput } from './family-where-unique.input';

@ArgsType()
export class UpdateOneFamilyArgs {

    @Field(() => FamilyUpdateInput, {nullable:false})
    @Type(() => FamilyUpdateInput)
    data!: FamilyUpdateInput;

    @Field(() => FamilyWhereUniqueInput, {nullable:false})
    @Type(() => FamilyWhereUniqueInput)
    where!: Prisma.AtLeast<FamilyWhereUniqueInput, 'id'>;
}
