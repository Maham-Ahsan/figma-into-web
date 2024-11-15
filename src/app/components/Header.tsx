import Link from "next/link";
export default function Header(data:any) {
  return (
<>
<div className="header-section">
<div className={`${data.font.className} link-parents`}>
  <ul className="links">
    <li className="link"><Link href="">Works</Link></li>
    <li className="link"><Link href="">Blog</Link></li>
    <li className="link"><Link href="">Contact</Link></li>
  </ul>
</div>
</div>
</>
  );
}