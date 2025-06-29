import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialEntryCreateManyReceivedByInput } from './material-entry-create-many-received-by.input';
import { Type } from 'class-transformer';

@InputType()
export class MaterialEntryCreateManyReceivedByInputEnvelope {

    @Field(() => [MaterialEntryCreateManyReceivedByInput], {nullable:false})
    @Type(() => MaterialEntryCreateManyReceivedByInput)
    data!: Array<MaterialEntryCreateManyReceivedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
