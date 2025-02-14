import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { Type } from 'class-transformer';
import { FamilyCreateInput } from './family-create.input';
import { FamilyUpdateInput } from './family-update.input';

@ArgsType()
export class UpsertOneFamilyArgs {

    @Field(() => FamilyWhereUniqueInput, {nullable:false})
    @Type(() => FamilyWhereUniqueInput)
    where!: Prisma.AtLeast<FamilyWhereUniqueInput, 'id'>;

    @Field(() => FamilyCreateInput, {nullable:false})
    @Type(() => FamilyCreateInput)
    create!: FamilyCreateInput;

    @Field(() => FamilyUpdateInput, {nullable:false})
    @Type(() => FamilyUpdateInput)
    update!: FamilyUpdateInput;
}
