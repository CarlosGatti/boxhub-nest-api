import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialEntryCreateManyProjectInput } from './material-entry-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class MaterialEntryCreateManyProjectInputEnvelope {

    @Field(() => [MaterialEntryCreateManyProjectInput], {nullable:false})
    @Type(() => MaterialEntryCreateManyProjectInput)
    data!: Array<MaterialEntryCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
