import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateManyCreatedByInput } from './defined-academy-resource-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyResourceCreateManyCreatedByInputEnvelope {

    @Field(() => [DefinedAcademyResourceCreateManyCreatedByInput], {nullable:false})
    @Type(() => DefinedAcademyResourceCreateManyCreatedByInput)
    data!: Array<DefinedAcademyResourceCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
