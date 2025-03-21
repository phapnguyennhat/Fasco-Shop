import { GoogleOAuthProvider } from '@react-oauth/google';

export default function GoogleAuthProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
            {' '}
            {children}
        </GoogleOAuthProvider>
    );
}