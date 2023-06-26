const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} = require("firebase/auth");
const { auth } = require("./../config/firebase");

exports.signup = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(422)
      .json({ email: "Email is required", password: "Password is required" });
  }

  createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      const user = userCredential.user;
      return res.status(201).json(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/weak-password") {
        return res.status(500).json({ error: errorMessage });
      } else {
        return res.status(500).json({ error: errorMessage });
      }
    });
};

exports.signin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(422)
      .json({ email: "Email is required", password: "Password is required" });
  }

  signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      // const admin = await getUserByEmail(auth, 'deepak.kondapalli29@gmail.com');

      // if(admin.emailVerified) {
      //   // Check if the signed-in user is an admin
      //   if (user.email === admin.email) {
      //     // Add custom claim for admin role
      //     await setCustomUserClaims(auth, user.uid, { admin: true });
      //   }
      // }

      return res.status(201).json(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        return res.status(500).json({ error: errorMessage });
      } else {
        return res.status(500).json({ error: errorMessage });
      }
    });
};


exports.forgetPassword = async (req, res) => {
    if(!req.body.email){
        return res.status(422).json({ email: "email is required" });
    };

    sendPasswordResetEmail(auth, req.body.email).then(() => {
        return res.status(200).json({ status: "Password reset email sent successfully" });
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-email") {
          return res.status(500).json({ error: errorMessage });
        } else {
          return res.status(500).json({ error: errorMessage });
        }
      });
}