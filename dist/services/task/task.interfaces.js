"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Tags = void 0;
var Tags;
(function (Tags) {
    Tags[Tags["Bug"] = 0] = "Bug";
    Tags[Tags["Feature"] = 1] = "Feature";
})(Tags || (exports.Tags = Tags = {}));
var Status;
(function (Status) {
    Status[Status["Todo"] = 0] = "Todo";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
    Status[Status["Blocked"] = 3] = "Blocked";
})(Status || (exports.Status = Status = {}));
