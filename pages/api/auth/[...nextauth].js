import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { API_URL } from "../../../config";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      // credentials: {},
      authorize: async (credentials) => {
        // const payload = {
        //   email: credentials.email,
        //   password: credentials.password,
        // };
        const { ...values } = credentials;

        const url = `${API_URL}/admin/login`;

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const user = await response.json();

        // console.log("main", url);
        // console.log("auth", user);
        // if (response.ok && user) {
        if (response.ok) {
          // console.log("admin login", user);
          // res.setHeader("Set-Cookie", [
          //   // cookie.serialize("token", user.token, {
          //   //   httpOnly: true,
          //   //   secure: process.env.NODE_ENV !== "development",
          //   //   maxAge: 30 * 24 * 60 * 60, // 30 days
          //   //   sameSite: "strict",
          //   //   path: "/",
          //   // }),
          //   cookie.serialize("id", user.id, {
          //     // httpOnly: true,
          //     // secure: process.env.NODE_ENV !== "development",
          //     maxAge: 30 * 24 * 60 * 60, // 30 days
          //     sameSite: "strict",
          //     path: "/",
          //   }),
          //   cookie.serialize("adminId", user.adminId, {
          //     // httpOnly: true,
          //     // secure: process.env.NODE_ENV !== "development",
          //     maxAge: 30 * 24 * 60 * 60, // 30 days
          //     sameSite: "strict",
          //     path: "/",
          //   }),
          //   cookie.serialize("username", user.username, {
          //     // httpOnly: true,
          //     // secure: process.env.NODE_ENV !== "development",
          //     maxAge: 30 * 24 * 60 * 60, // 30 days
          //     sameSite: "strict",
          //     path: "/",
          //   }),
          //   cookie.serialize("admin", user.admin, {
          //     // httpOnly: true,
          //     // secure: process.env.NODE_ENV !== "development",
          //     maxAge: 30 * 24 * 60 * 60, // 30 days
          //     sameSite: "strict",
          //     path: "/",
          //   }),
          // ]);
          return user;
        } else {
          console.log("error", user);
          // throw new Error(user.error);
          throw new Error(user.text);
        }
      },
    }),
  ],

  pages: {
    signIn: "/sign-in",
    // error: "/404",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const userInfo = {
          name: user.name,
          email: user.email,
          image: user.image,
          SECRET_KEY: process.env.SECRET_KEY,
        };

        const url = `${API_URL}/login`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${secret}`, //secret from .env
          },
          body: JSON.stringify(userInfo),
        });

        const data = await response.json();

        // const response = {
        //   ok: true,
        // }; //fake response

        // const data = {
        //   token: response.ok ? "token from backend" : null,
        // }; //fake data

        if (response.ok) {
          console.log("success callback", data);
          user.token = data.token; //data.token could change
          user.role = data.user.role; //data.token could change
          user.id = data.user._id; //data.token could change

          return true;
        } else {
          // console.log("error", data);
          return false;
        }
      }

      // if (account.provider === "credentials") {
      //   return true;
      // }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        // console.log("jwt token", token);
        token.token = user.token;
        // token.id = user.id;
        // token.role = user.role
        token.role = user.role;
        token.id = user.id;
      }

      return token;
    },

    async session({ token, session }) {
      if (token) {
        session.user.token = token.token;
        session.user.id = token.id;
        session.user.role = token.role;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);

//with credentials
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import cookie from "cookie";
// import { API_URL } from "../../../config";

// const nextAuthOptions = (req, res) => {
//   return {
//     // session: {
//     //   strategy: "jwt",
//     // },
//     providers: [
//       CredentialsProvider({
//         name: "Credentials",
//         // credentials: {},
//         authorize: async (credentials) => {
//           // const payload = {
//           //   email: credentials.email,
//           //   password: credentials.password,
//           // };
//           const { ...values } = credentials;

//           const url = `${API_URL}/user/login`;

//           const response = await fetch(url, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values),
//           });

//           const user = await response.json();

//           console.log("main", user);

//           // if (response.ok && user) {
//           if (response.ok && user.token && user.id) {
//             res.setHeader("Set-Cookie", [
//               // cookie.serialize("token", user.token, {
//               //   httpOnly: true,
//               //   secure: process.env.NODE_ENV !== "development",
//               //   maxAge: 30 * 24 * 60 * 60, // 30 days
//               //   sameSite: "strict",
//               //   path: "/",
//               // }),
//               cookie.serialize("id", user.id, {
//                 // httpOnly: true,
//                 // secure: process.env.NODE_ENV !== "development",
//                 maxAge: 30 * 24 * 60 * 60, // 30 days
//                 sameSite: "strict",
//                 path: "/",
//               }),
//             ]);
//             return user;
//           } else {
//             // console.log("error", user);
//             throw new Error(user.error);
//             // throw new Error(user.error || user.message);
//           }
//         },
//       }),
//     ],

//     pages: {
//       signIn: "/user-signin",
//     },

// callbacks: {
//   jwt: async ({ token, user, account }) => {
//     // console.log("xxs", token);
//     if (user) {
//       token.user = user;

//       token.accessToken = user.access_token;

//       // token.token = user.token;
//       // token.id = user.id;
//       // token.role = user.role;
//       // token.user_name = user.user_name;
//       // token.institution_name = user.institution_name;
//     }
//     if (account) {
//       token.accessToken = account.access_token;
//     }

//     // console.log("account is", account);

//     return token;
//   },
//   session: async ({ session, token }) => {
//     if (token) {
//       session.user = token.user;
//       // session.token = token.user.token;
//       // session.id = token.user.id;
//       // session.identity_id = token.user.identity_id;
//     }

//     // console.log("session IS", session);

//     return session;
//   },
// },

//     secret: process.env.NEXTAUTH_SECRET,
//   };
// };

// export default (req, res) => {
//   return NextAuth(req, res, nextAuthOptions(req, res));
// };
