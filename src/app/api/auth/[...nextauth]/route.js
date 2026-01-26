const { authOptions } = require("@/lib/authOption");
const { default: NextAuth } = require("next-auth");

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
