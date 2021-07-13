"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channels = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var schema = mongoose_1.default.Schema;
var channelsSchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
var Channels = mongoose_1.default.model("Channels", channelsSchema);
exports.Channels = Channels;
