import Link from "next/link";

export default function NotFound(){
    return(
        <main>
            <h1>
                Page not found
            </h1>
            <p>
                This page doesnt exists yet
            </p>
            <Link href="/">
                Back Home
            </Link>
        </main>
    );
}