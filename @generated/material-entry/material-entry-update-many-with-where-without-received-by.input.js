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
exports.MaterialEntryUpdateManyWithWhereWithoutReceivedByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_entry_scalar_where_input_1 = require("./material-entry-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const material_entry_update_many_mutation_input_1 = require("./material-entry-update-many-mutation.input");
let MaterialEntryUpdateManyWithWhereWithoutReceivedByInput = class MaterialEntryUpdateManyWithWhereWithoutReceivedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => material_entry_scalar_where_input_1.MaterialEntryScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => material_entry_scalar_where_input_1.MaterialEntryScalarWhereInput),
    __metadata("design:type", material_entry_scalar_where_input_1.MaterialEntryScalarWhereInput)
], MaterialEntryUpdateManyWithWhereWithoutReceivedByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_update_many_mutation_input_1.MaterialEntryUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => material_entry_update_many_mutation_input_1.MaterialEntryUpdateManyMutationInput),
    __metadata("design:type", material_entry_update_many_mutation_input_1.MaterialEntryUpdateManyMutationInput)
], MaterialEntryUpdateManyWithWhereWithoutReceivedByInput.prototype, "data", void 0);
MaterialEntryUpdateManyWithWhereWithoutReceivedByInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialEntryUpdateManyWithWhereWithoutReceivedByInput);
exports.MaterialEntryUpdateManyWithWhereWithoutReceivedByInput = MaterialEntryUpdateManyWithWhereWithoutReceivedByInput;
//# sourceMappingURL=material-entry-update-many-with-where-without-received-by.input.js.map