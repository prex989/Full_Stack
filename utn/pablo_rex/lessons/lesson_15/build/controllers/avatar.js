"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAvatar = exports.getAvatar = void 0;
const getAvatar = function (req, res, next) {
    const avatar = {
        name: "avatarName",
        image: "avatarImage"
    };
    res;
    return res.json(avatar);
};
exports.getAvatar = getAvatar;
const postAvatar = function (req, res, next) {
    const avatar = req.body;
    const message = "Avatar Saved";
    return res.send(message);
};
exports.postAvatar = postAvatar;
exports.default = exports.postAvatar;
// module.exports={
//     getAvatar,
//     postAvatar
// }
