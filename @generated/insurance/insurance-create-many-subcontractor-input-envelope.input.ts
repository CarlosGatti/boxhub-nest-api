import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InsuranceCreateManySubcontractorInput } from './insurance-create-many-subcontractor.input';
import { Type } from 'class-transformer';

@InputType()
export class InsuranceCreateManySubcontractorInputEnvelope {

    @Field(() => [InsuranceCreateManySubcontractorInput], {nullable:false})
    @Type(() => InsuranceCreateManySubcontractorInput)
    data!: Array<InsuranceCreateManySubcontractorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
