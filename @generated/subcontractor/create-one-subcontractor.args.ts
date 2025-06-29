import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubcontractorCreateInput } from './subcontractor-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubcontractorArgs {

    @Field(() => SubcontractorCreateInput, {nullable:false})
    @Type(() => SubcontractorCreateInput)
    data!: SubcontractorCreateInput;
}
