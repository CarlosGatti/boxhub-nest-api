import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubcontractorWhereUniqueInput } from './subcontractor-where-unique.input';
import { Type } from 'class-transformer';
import { SubcontractorCreateInput } from './subcontractor-create.input';
import { SubcontractorUpdateInput } from './subcontractor-update.input';

@ArgsType()
export class UpsertOneSubcontractorArgs {

    @Field(() => SubcontractorWhereUniqueInput, {nullable:false})
    @Type(() => SubcontractorWhereUniqueInput)
    where!: Prisma.AtLeast<SubcontractorWhereUniqueInput, 'id'>;

    @Field(() => SubcontractorCreateInput, {nullable:false})
    @Type(() => SubcontractorCreateInput)
    create!: SubcontractorCreateInput;

    @Field(() => SubcontractorUpdateInput, {nullable:false})
    @Type(() => SubcontractorUpdateInput)
    update!: SubcontractorUpdateInput;
}
