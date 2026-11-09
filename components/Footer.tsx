import Link from "next/link";

export default function Footer(){
   return(
    <footer className="mt-auto border-t">
        <ul className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-6 text-sm text-gray-500 sm:flex-row sm:justify-between">
            <li><Link href="/">© 2026 KS Ghost</Link></li>
            <li><a href= "tel:+14165550123">📞 (416) 555-0123</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
    </footer>
   ); 
}