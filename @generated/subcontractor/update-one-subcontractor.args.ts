import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubcontractorUpdateInput } from './subcontractor-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SubcontractorWhereUniqueInput } from './subcontractor-where-unique.input';

@ArgsType()
export class UpdateOneSubcontractorArgs {

    @Field(() => SubcontractorUpdateInput, {nullable:false})
    @Type(() => SubcontractorUpdateInput)
    data!: SubcontractorUpdateInput;

    @Field(() => SubcontractorWhereUniqueInput, {nullable:false})
    @Type(() => SubcontractorWhereUniqueInput)
    where!: Prisma.AtLeast<SubcontractorWhereUniqueInput, 'id'>;
}
