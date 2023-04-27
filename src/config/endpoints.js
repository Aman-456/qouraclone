module.exports.endpoints = {
    // user
    // user auth
    signup: "api/user/register",
    signupWithImage: "api/user/registerWithImage",
    otpsend: "api/user/otpsend",
    otpverify: "api/user/verifyotp",
    passwordchange: "api/user/passwordchange",
    signin: "api/user/signin",

    // posts
    createpost: "api/post",
    singlepost: "api/post/singlepost",
    like: "api/post/like",
    unlike: "api/post/unlike",
    editcomment: "api/post/editcomment",
    editreply: "api/post/editreply",
    editpost: "api/post/editpost",
    deletecomment: "api/post/deletecomment",
    deletereply: "api/post/deletereply",
    deletepost: "api/post/deletepost",
    comment: "api/post/comment",
    reply: "api/post/reply",
    addtosave: "api/post/addtosave",
    removefromsave: "api/post/removefromsave",

    getall: "api/post"
}