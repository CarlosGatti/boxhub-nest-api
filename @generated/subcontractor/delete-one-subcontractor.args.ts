import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubcontractorWhereUniqueInput } from './subcontractor-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneSubcontractorArgs {

    @Field(() => SubcontractorWhereUniqueInput, {nullable:false})
    @Type(() => SubcontractorWhereUniqueInput)
    where!: Prisma.AtLeast<SubcontractorWhereUniqueInput, 'id'>;
}
