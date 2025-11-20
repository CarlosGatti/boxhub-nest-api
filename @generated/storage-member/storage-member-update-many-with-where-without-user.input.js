"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageMemberUpdateManyWithWhereWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const storage_member_scalar_where_input_1 = require("./storage-member-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const storage_member_update_many_mutation_input_1 = require("./storage-member-update-many-mutation.input");
let StorageMemberUpdateManyWithWhereWithoutUserInput = class StorageMemberUpdateManyWithWhereWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => storage_member_scalar_where_input_1.StorageMemberScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => storage_member_scalar_where_input_1.StorageMemberScalarWhereInput),
    __metadata("design:type", storage_member_scalar_where_input_1.StorageMemberScalarWhereInput)
], StorageMemberUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_member_update_many_mutation_input_1.StorageMemberUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => storage_member_update_many_mutation_input_1.StorageMemberUpdateManyMutationInput),
    __metadata("design:type", storage_member_update_many_mutation_input_1.StorageMemberUpdateManyMutationInput)
], StorageMemberUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
StorageMemberUpdateManyWithWhereWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], StorageMemberUpdateManyWithWhereWithoutUserInput);
exports.StorageMemberUpdateManyWithWhereWithoutUserInput = StorageMemberUpdateManyWithWhereWithoutUserInput;
//# sourceMappingURL=storage-member-update-many-with-where-without-user.input.js.map