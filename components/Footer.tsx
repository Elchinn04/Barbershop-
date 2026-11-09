import Link from "next/link";

export default function Footer(){
   return(
    <footer>
        <ul>
            <li><Link href="/">© 2026 KS Ghost</Link></li>
            <li><a href= "tel:+14165550123">📞 (416) 555-0123</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
    </footer>
   ); 
}